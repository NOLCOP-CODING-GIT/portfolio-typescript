import React from "react";
import { motion } from "framer-motion";
import { Code, Palette, Zap, Globe, Smartphone, Database } from "lucide-react";
import { Link } from "react-router-dom";

const Skills = () => {
  const skills = [
    {
      name: "Développement Web",
      icon: Code,
      level: 85,
      color: "from-cyan-500 to-blue-500",
      description: "React/Next.js, Node.js, TypeScript",
      path: "/services/web-development",
    },
    {
      name: "Applications Mobile",
      icon: Smartphone,
      level: 78,
      color: "from-cyan-500 to-blue-500",
      description: "React Native, Flutter, PWA",
      path: "/services/mobile-apps",
    },
    {
      name: "UI/UX Design",
      icon: Palette,
      level: 75,
      color: "from-purple-500 to-pink-500",
      description: "Figma, Adobe XD, Prototypage",
      path: "/services/ui-ux-design",
    },
    {
      name: "Solutions Cloud",
      icon: Globe,
      level: 65,
      color: "from-purple-500 to-pink-500",
      description: "AWS, Docker, Kubernetes",
      path: "/services/cloud-solutions",
    },
    {
      name: "Consulting Tech",
      icon: Zap,
      level: 72,
      color: "from-cyan-500 to-blue-500",
      description: "Architecture, Audit, Conseil",
      path: "/services/tech-consulting",
    },
    {
      name: "Base de Données",
      icon: Database,
      level: 80,
      color: "from-cyan-500 to-blue-500",
      description: "PostgreSQL, MongoDB, Supabase",
      path: "/services/web-development",
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
              Compétences Techniques
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Mes domaines d'expertise avec les niveaux de maîtrise réels
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div
                  className={`p-4 rounded-lg bg-linear-to-r ${skill.color} mr-4`}
                >
                  <skill.icon size={28} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {skill.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{skill.description}</p>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400 text-sm">Maîtrise</span>
                  <span
                    className={`font-semibold ${
                      skill.color.includes("cyan")
                        ? "text-cyan-400"
                        : "text-purple-400"
                    }`}
                  >
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.2, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`h-full rounded-full bg-linear-to-r ${skill.color}`}
                  />
                </div>
              </div>

              <Link
                to={skill.path}
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
              >
                Voir les détails
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

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
          >
            Voir tous les services
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

export default Skills;
