# Configuration du Formulaire de Contact avec Supabase + EmailJS

## Étapes de Configuration

### 1. Configuration Supabase

1. Créez un compte sur [Supabase](https://supabase.com)
2. Créez un nouveau projet
3. Allez dans Settings > API pour récupérer:
   - Project URL
   - anon public key

4. Exécutez le script SQL suivant dans l'éditeur SQL de Supabase:

```sql
-- Créer la table des contacts
CREATE TABLE contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status VARCHAR(50) DEFAULT 'nouveau' CHECK (status IN ('nouveau', 'contacté', 'traité')),
  phone VARCHAR(50),
  company VARCHAR(255)
);

-- Activer RLS (Row Level Security)
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Créer une politique pour permettre les insertions publiques
CREATE POLICY "Allow public insert" ON contacts
  FOR INSERT WITH CHECK (true);

-- Créer une politique pour permettre la lecture aux utilisateurs authentifiés
CREATE POLICY "Allow authenticated read" ON contacts
  FOR SELECT USING (auth.role() = 'authenticated');

-- Créer un index pour optimiser les recherches
CREATE INDEX idx_contacts_email ON contacts(email);
CREATE INDEX idx_contacts_status ON contacts(status);
CREATE INDEX idx_contacts_created_at ON contacts(created_at);
```

### 2. Configuration EmailJS

1. Créez un compte sur [EmailJS](https://www.emailjs.com)
2. Créez un service email (Gmail, Outlook, etc.)
3. Créez un template avec les variables suivantes:
   - `{{name}}`: Nom de l'expéditeur
   - `{{email}}`: Email de l'expéditeur
   - `{{message}}`: Message

4. Récupérez:
   - Service ID
   - Template ID
   - Public Key

### 3. Variables d'Environnement

Créez un fichier `.env.local` à la racine du projet:

```env
# Supabase Configuration
VITE_SUPABASE_URL=votre_url_supabase
VITE_SUPABASE_ANON_KEY=votre_cle_anon_supabase

# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=votre_service_id
VITE_EMAILJS_TEMPLATE_ID=votre_template_id
VITE_EMAILJS_PUBLIC_KEY=votre_cle_publique
```

## Flux de Fonctionnement

1. **Soumission du formulaire**: L'utilisateur remplit et soumet le formulaire
2. **Sauvegarde Supabase**: Les données sont sauvegardées dans la table `contacts`
3. **Envoi EmailJS**: Un email est envoyé avec les informations du contact
4. **Confirmation**: L'utilisateur reçoit une confirmation de succès/erreur

## Fonctionnalités

- ✅ Sauvegarde automatique dans Supabase
- ✅ Envoi d'email via EmailJS
- ✅ Validation des champs obligatoires
- ✅ Messages de succès/erreur
- ✅ Chargement pendant l'envoi
- ✅ Champs optionnels (téléphone, entreprise)
- ✅ Réinitialisation automatique du formulaire

## Pour la Dashboard Future

Les données sont structurées pour faciliter la création d'une dashboard:

- `status`: Pour suivre l'état des contacts (nouveau, contacté, traité)
- `created_at`: Pour le suivi temporel
- Index optimisés pour les performances

## Sécurité

- RLS activé sur Supabase
- Validation côté client
- Variables d'environnement pour les clés API
