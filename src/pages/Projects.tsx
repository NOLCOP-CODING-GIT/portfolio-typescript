import React, { useState } from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("tous");

  const projects = [
    {
      id: 1,
      icon: "fas fa-shopping-cart",
      tag: "E-Commerce",
      tagClass: "tag-ecommerce",
      title: "Nolcop Store",
      description:
        "Boutique en ligne moderne avec paiement MoMo/Flooz et dashboard admin.",
      link: "https://nolcop-store.vercel.app/",
      linkText: "Visiter l'app",
      linkIcon: "fas fa-external-link-alt",
      category: "ecommerce",
      technologies: ["React", "TypeScript", "TailwindCSS", "Supabase"],
      stats: { visits: "1.5K+", conversion: "8%", revenue: "250K FCFA" },
    },
    {
      id: 2,
      icon: "fas fa-laptop-code",
      tag: "SaaS",
      tagClass: "tag-saas",
      title: "Gestion Scolaire Pro",
      description:
        "Plateforme complète pour établissements avec authentification et analytics.",
      link: "https://gestschoolpro.vercel.app/",
      linkText: "Visiter l'app",
      linkIcon: "fas fa-external-link-alt",
      category: "saas",
      technologies: ["Next.js", "TypeScript", "TailwindCSS", "Firebase"],
      stats: { schools: "5+", students: "500+", satisfaction: "92%" },
    },
    {
      id: 3,
      icon: "fas fa-robot",
      tag: "Intelligence Artificielle",
      tagClass: "tag-ia",
      title: "Nolcop Bot Immo",
      description:
        "Assistant IA pour agences immobilières avec chatbot et recommandations.",
      link: "https://nolcop-bot-immobiler.vercel.app/",
      linkText: "Visiter l'app",
      linkIcon: "fas fa-play",
      category: "ia",
      technologies: ["React", "TypeScript", "OpenAI API", "Supabase"],
      stats: { queries: "5K+", accuracy: "85%", response: "2s" },
    },
    {
      id: 4,
      icon: "fas fa-hotel",
      tag: "Booking",
      tagClass: "tag-booking",
      title: "Hôtel Horizon Cotonou",
      description:
        "Système de réservation avec calendrier temps réel et paiements sécurisés.",
      link: "https://benin-horizon-hotel-zeta.vercel.app/",
      linkText: "Visiter l'app",
      linkIcon: "fas fa-external-link-alt",
      category: "booking",
      technologies: ["React", "TypeScript", "TailwindCSS", "Firebase"],
      stats: { rooms: "20+", bookings: "150+", rating: "4.2★" },
    },
    {
      id: 5,
      icon: "fas fa-mobile-alt",
      tag: "Application Mobile",
      tagClass: "tag-mobile",
      title: "Food Delivery Bénin",
      description:
        "App de livraison avec tracking GPS et notifications push en temps réel.",
      link: "https://food-delivery-benin.vercel.app/",
      linkText: "Visiter l'app",
      linkIcon: "fas fa-mobile",
      category: "mobile",
      technologies: ["React Native", "TypeScript", "Firebase", "TailwindCSS"],
      stats: { downloads: "2.5K+", restaurants: "15+", orders: "5K+" },
    },
    {
      id: 6,
      icon: "fas fa-chart-line",
      tag: "Dashboard Analytics",
      tagClass: "tag-analytics",
      title: "Business Intelligence Pro",
      description:
        "Tableau de bord analytique avec graphiques interactifs et exports PDF.",
      link: "https://business-intelligence-three.vercel.app/",
      linkText: "Visiter l'app",
      linkIcon: "fas fa-chart-bar",
      category: "analytics",
      technologies: ["Next.js", "TypeScript", "Recharts", "Supabase"],
      stats: { reports: "100+", data: "500MB+", insights: "50+" },
    },
  ];

  const categories = [
    { id: "tous", name: "Tous les projets", icon: "fas fa-th" },
    { id: "ecommerce", name: "E-Commerce", icon: "fas fa-shopping-cart" },
    { id: "saas", name: "SaaS", icon: "fas fa-cloud" },
    { id: "ia", name: "IA & Bot", icon: "fas fa-brain" },
    { id: "mobile", name: "Mobile", icon: "fas fa-mobile" },
    { id: "booking", name: "Booking", icon: "fas fa-calendar-check" },
  ];

  const filteredProjects =
    selectedCategory === "tous"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="min-h-screen px-6 py-20">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Projets
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Découvrez mes réalisations professionnelles, des applications
            e-commerce aux solutions IA
          </p>
        </motion.div>

        {/* Categories Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-linear-to-r from-blue-500 to-purple-500 text-white"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className={`${category.icon} mr-2`}></i>
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden hover:border-white/40 transition-all duration-300">
                {/* Project Header */}
                <div className="p-6 border-b border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-linear-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <i className={`${project.icon} text-white text-xl`}></i>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${project.tagClass}`}
                    >
                      {project.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="px-6 py-4 border-b border-white/10">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="px-6 py-4 border-b border-white/10">
                  <div className="grid grid-cols-3 gap-2 text-center">
                    {Object.entries(project.stats).map(
                      ([key, value], statIndex) => (
                        <div key={statIndex}>
                          <div className="text-lg font-bold text-blue-400">
                            {value}
                          </div>
                          <div className="text-xs text-gray-400 capitalize">
                            {key}
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                </div>

                {/* Action Button */}
                <div className="p-6">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-linear-to-r from-blue-500 to-purple-500 rounded-lg font-semibold text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <i className={`${project.linkIcon}`}></i>
                    {project.linkText}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Aucun projet trouvé
            </h3>
            <p className="text-gray-400">
              Essayez une autre catégorie pour voir plus de projets
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projects;
