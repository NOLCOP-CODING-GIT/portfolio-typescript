import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Palette, Eye, Layers } from "lucide-react";
import { Link } from "react-router-dom";

const UiUxDesign = () => {
  const technologies = [
    { name: "Figma", level: 75 },
    { name: "Adobe XD", level: 70 },
    { name: "Sketch", level: 65 },
    { name: "Adobe Photoshop", level: 72 },
    { name: "Adobe Illustrator", level: 68 },
    { name: "Prototyping", level: 73 },
  ];

  const services = [
    {
      icon: Palette,
      title: "Design d'Interface",
      description: "Création d'interfaces utilisateur modernes et intuitives",
    },
    {
      icon: Eye,
      title: "Expérience Utilisateur",
      description:
        "Optimisation des parcours utilisateur pour une expérience fluide",
    },
    {
      icon: Layers,
      title: "Design System",
      description: "Création de systèmes de design cohérents et évolutifs",
    },
  ];

  const process = [
    {
      step: "1",
      title: "Recherche Utilisateur",
      description: "Analyse des besoins et comportements",
    },
    {
      step: "2",
      title: "Wireframing",
      description: "Structuration de l'interface",
    },
    {
      step: "3",
      title: "Design Visuel",
      description: "Création de l'identité visuelle",
    },
    { step: "4", title: "Prototypage", description: "Maquettes interactives" },
    {
      step: "5",
      title: "Tests Utilisateurs",
      description: "Validation et itérations",
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
            <div className="w-20 h-20 bg-linear-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Palette size={40} className="text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-4">
              <span className="bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                UI/UX Design
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Des designs qui allient esthétique et fonctionnalité pour une
              expérience utilisateur exceptionnelle
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
              <div className="w-16 h-16 bg-linear-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                <service.icon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <h2 className="text-3xl font-bold text-white mb-8">
              Technologies & Outils
            </h2>
            <div className="space-y-6">
              {technologies.map((tech, index) => (
                <div key={tech.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">{tech.name}</span>
                    <span className="text-purple-400">{tech.level}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="h-full bg-linear-to-r from-purple-500 to-pink-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <h2 className="text-3xl font-bold text-white mb-8">
              Processus de Design
            </h2>
            <div className="space-y-4">
              {process.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-white font-bold text-sm">
                      {item.step}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-purple-500 to-pink-500 rounded-lg font-semibold text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
          >
            Discutons de votre design
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

export default UiUxDesign;
