import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Code, Database, Globe, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const WebDevelopment = () => {
  const technologies = [
    { name: "React/Next.js", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "TypeScript", level: 78 },
    { name: "Python/Django", level: 72 },
    { name: "PostgreSQL/MongoDB", level: 80 },
    { name: "Docker/Kubernetes", level: 68 },
  ];

  const services = [
    {
      icon: Globe,
      title: "Sites Web Sur Mesure",
      description:
        "Création de sites web uniques et performants adaptés à vos besoins",
    },
    {
      icon: Database,
      title: "Applications Web Complexes",
      description:
        "Développement d'applications avec gestion de données et fonctionnalités avancées",
    },
    {
      icon: Zap,
      title: "API et Microservices",
      description: "Architecture scalable avec APIs RESTful et GraphQL",
    },
  ];

  return (
    <div className="min-h-screen px-4 sm:px-6 pt-20 sm:pt-24 py-12 sm:py-16 md:py-20">
      {/* Navigation back - positioned above main content */}
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8 py-2"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <ArrowLeft size={20} />
            Retour aux services
          </Link>
        </motion.div>
      </div>

      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-linear-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Code size={40} className="text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-4">
              <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Développement Web
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Des solutions web modernes, rapides et évolutives pour propulser
              votre entreprise dans l'ère numérique
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <div className="w-16 h-16 bg-linear-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                <service.icon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Technologies Maîtrisées
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {technologies.map((tech, index) => (
              <div key={tech.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium">{tech.name}</span>
                  <span className="text-blue-400">{tech.level}%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full bg-linear-to-r from-blue-500 to-purple-500 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-blue-500 to-purple-500 rounded-lg font-semibold text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
          >
            Discutons de votre projet
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default WebDevelopment;
