import React from "react";
import { motion } from "framer-motion";
import { Code, Smartphone, Palette, Cloud, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Développement Web",
      description:
        "Création de sites web modernes et performants avec les dernières technologies",
      features: ["React/Next.js", "Node.js", "TypeScript", "API REST"],
      path: "/services/web-development",
    },
    {
      icon: Smartphone,
      title: "Applications Mobile",
      description: "Développement d'applications mobiles natives et hybrides",
      features: ["React Native", "Flutter", "iOS/Android", "PWA"],
      path: "/services/mobile-apps",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Design d'interfaces utilisateur intuitives et modernes",
      features: ["Figma", "Adobe XD", "Prototypage", "Design System"],
      path: "/services/ui-ux-design",
    },
    {
      icon: Cloud,
      title: "Solutions Cloud",
      description: "Infrastructure cloud et déploiement scalable",
      features: ["AWS", "Vercel", "Docker", "CI/CD"],
      path: "/services/cloud-solutions",
    },
    {
      icon: Lightbulb,
      title: "Consulting Tech",
      description: "Conseil technique et accompagnement stratégique",
      features: ["Architecture", "Audit", "Formation", "Mentoring"],
      path: "/services/tech-consulting",
    },
  ];

  return (
    <div className="min-h-screen px-6 py-20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Mes Services
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Des solutions complètes pour transformer vos idées en réalités
            numériques
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-linear-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon size={32} className="text-white" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-6">{service.description}</p>

              <div className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full" />
                    <span className="text-gray-400 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                to={service.path}
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium"
              >
                En savoir plus
                <svg
                  className="w-4 h-4"
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
