import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const timeline = [
    {
      year: "2020-2023",
      title: "Licence Professionnelle en Développement Web",
      institution: "Université Africaine de Technologies et de Management (UATM) GASA FORMATION",
      description:
        "Formation spécialisée en développement full-stack avec focus sur les technologies modernes",
      skills: ["HTML/CSS/JavaScript", "PHP/MySQL", "React", "Node.js", "Git"],
      type: "education",
    },
    {
      year: "2023-2024",
      title: "Développeur Junior",
      company: "Freelance & Projets Personnels",
      description:
        "Premiers projets professionnels, création d'applications web pour des clients locaux",
      skills: ["React", "Express.js", "Supabase", "TailwindCSS", "API REST"],
      type: "work",
    },
    {
      year: "2024-2025",
      title: "Développeur Full-Stack",
      company: "Projets Entreprise",
      description:
        "Développement d'applications complexes, gestion de bases de données, intégration de systèmes",
      skills: ["TypeScript", "Next.js", "PostgreSQL", "Docker", "CI/CD"],
      type: "work",
    },
    {
      year: "2025-Présent",
      title: "Développeur Senior Full-Stack",
      company: "Architecture & Leadership Technique",
      description:
        "Conception d'architectures scalables, mentorat d'équipes, optimisation des performances",
      skills: [
        "Microservices",
        "Cloud AWS",
        "React Query",
        "Prisma",
        "Testing",
      ],
      type: "work",
    },
  ];

  const skills = [
    {
      category: "Frontend",
      items: [
        "React",
        "TypeScript",
        "Next.js",
        "TailwindCSS",
        "Redux",
        "React Query",
      ],
    },
    {
      category: "Backend",
      items: [
        "Node.js",
        "Express",
        "NestJS",
        "PostgreSQL",
        "Supabase",
        "Prisma",
      ],
    },
    {
      category: "DevOps & Tools",
      items: ["Git", "Docker", "CI/CD", "AWS", "Vercel", "Testing"],
    },
    {
      category: "Soft Skills",
      items: [
        "Leadership",
        "Mentorat",
        "Architecture",
        "Communication",
        "Gestion de projet",
      ],
    },
  ];

  return (
    <div className="min-h-screen px-6 py-20">
      <div className="container mx-auto max-w-6xl">
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
              Mon Parcours
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            De la licence professionnelle au développement senior, mon évolution
            dans le monde du développement web
          </p>
        </motion.div>

        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-80 h-80 mx-auto relative">
              <motion.div
                className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-500 rounded-full"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <div className="absolute inset-4 bg-black rounded-full overflow-hidden">
                <img
                  src="/moi.jpg"
                  alt="Photo de profil"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-4">
              Mawulé Jean Orland ZINSOU
            </h3>
            <p className="text-xl text-blue-400 mb-6">
              Développeur Full-Stack Senior
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Diplômé d'une licence professionnelle en développement web, j'ai
              commencé mon parcours comme développeur junior avant d'évoluer
              progressivement vers un rôle senior. Aujourd'hui, je conçois des
              architectures complexes, je mentorise des équipes et je mène des
              projets techniques ambitieux.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Ma philosophie : allier expertise technique, innovation continue
              et collaboration efficace pour créer des solutions web qui ont un
              impact réel.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
              >
                <h4 className="text-lg font-semibold text-white mb-2">
                  Téléphone
                </h4>
                <p className="text-gray-300">+229 01 41 38 15 77</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
              >
                <h4 className="text-lg font-semibold text-white mb-2">
                  Formation
                </h4>
                <p className="text-gray-300">Licence Professionnelle</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
              >
                <h4 className="text-lg font-semibold text-white mb-2">
                  Localisation
                </h4>
                <p className="text-gray-300">Bénin</p>
              </motion.div>
            </div>

            <div className="flex gap-4">
              <motion.a
                href="https://github.com/NOLCOP-CODING-GIT"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-linear-to-r from-blue-500 to-purple-500 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Voir mes projets
              </motion.a>
              <motion.a
                href="https://www.instagram.com/harrywerland"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Me suivre
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Mon Évolution Professionnelle
            </span>
          </h3>

          <div className="relative">
            {/* Timeline line - Desktop only */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-linear-to-b from-blue-500 to-purple-500" />

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col`}
              >
                {/* Content Card */}
                <div
                  className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"} mb-6 md:mb-0`}
                >
                  <motion.div
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-white/20"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                      <span className="text-sm md:text-base text-blue-400 font-semibold">
                        {item.year}
                      </span>
                      <span
                        className={`px-2 py-1 rounded text-xs md:text-sm ${
                          item.type === "education"
                            ? "bg-blue-500/20 text-blue-400"
                            : "bg-purple-500/20 text-purple-400"
                        }`}
                      >
                        {item.type === "education" ? "Formation" : "Expérience"}
                      </span>
                    </div>
                    <h4 className="text-lg md:text-xl font-bold text-white mb-2">
                      {item.title}
                    </h4>
                    {item.institution && (
                      <p className="text-gray-400 text-sm md:text-base mb-2">
                        {item.institution}
                      </p>
                    )}
                    {item.company && (
                      <p className="text-gray-400 text-sm md:text-base mb-2">
                        {item.company}
                      </p>
                    )}
                    <p className="text-gray-300 text-sm md:text-base mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-1 md:gap-2">
                      {item.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Timeline dot - Desktop only */}
                <div className="hidden md:flex w-8 h-8 bg-linear-to-r from-blue-500 to-purple-500 rounded-full border-4 border-black items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>

                {/* Spacer for desktop layout */}
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-linear-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Compétences Techniques
            </span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
              >
                <h4 className="text-lg font-semibold text-white mb-4">
                  {category.category}
                </h4>
                <div className="space-y-2">
                  {category.items.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full" />
                      <span className="text-gray-300 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
