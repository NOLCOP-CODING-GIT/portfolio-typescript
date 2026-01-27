import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";

const Home = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const fullText =
    "Bienvenue dans mon univers digital ! Je transforme vos idées en expériences web exceptionnelles avec passion et expertise. Prêt à donner vie à votre prochain projet ?";

  const targetStats = useMemo(
    () => ({
      experience: 5,
      projects: 5,
      technologies: 9,
      satisfaction: 79.86,
    }),
    [],
  );

  const [stats, setStats] = useState({
    experience: 0,
    projects: 0,
    technologies: 0,
    satisfaction: 0,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animation progressive des statistiques - démarre immédiatement
            const duration = 2000; // 2 secondes
            const steps = 60; // 60 étapes pour une animation fluide

            let currentStep = 0;
            const interval = setInterval(() => {
              if (currentStep <= steps) {
                const progress = currentStep / steps;
                const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease-out cubic

                setStats({
                  experience: Math.floor(targetStats.experience * easeProgress),
                  projects: Math.floor(targetStats.projects * easeProgress),
                  technologies: Math.floor(
                    targetStats.technologies * easeProgress,
                  ),
                  satisfaction: parseFloat(
                    (targetStats.satisfaction * easeProgress).toFixed(2),
                  ),
                });

                currentStep++;
              } else {
                clearInterval(interval);
              }
            }, duration / steps);

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }, // Se déclenche dès que 10% sont visibles
    );

    const statsElement = document.getElementById("stats-section");
    if (statsElement) {
      observer.observe(statsElement);
    }

    return () => {
      if (statsElement) {
        observer.unobserve(statsElement);
      }
    };
  }, [
    targetStats.experience,
    targetStats.projects,
    targetStats.satisfaction,
    targetStats.technologies,
  ]);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!isDeleting && currentTextIndex < fullText.length) {
          setDisplayText(fullText.slice(0, currentTextIndex + 1));
          setCurrentTextIndex(currentTextIndex + 1);
        } else if (isDeleting && currentTextIndex > 0) {
          setDisplayText(fullText.slice(0, currentTextIndex - 1));
          setCurrentTextIndex(currentTextIndex - 1);
        } else if (currentTextIndex === fullText.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        } else if (currentTextIndex === 0) {
          setIsDeleting(false);
        }
      },
      isDeleting ? 80 : 120,
    );

    return () => clearTimeout(timeout);
  }, [currentTextIndex, isDeleting, fullText, targetStats]);

  return (
    <div className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 pt-20 sm:pt-24 py-12 sm:py-16 md:py-20">
      {/* Background gradient with parallax effect */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />

      {/* Animated particles - optimized for mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{
              x: `${(i * 137) % 100}%`,
              y: `${(i * 89) % 100}%`,
              opacity: 0.2 + (i % 5) * 0.1,
            }}
            animate={{
              y: ["0%", "-20%", "0%"],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 3 + (i % 2),
              repeat: Infinity,
              delay: i * 0.15,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-7xl mx-auto w-full">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 sm:mb-12 leading-tight px-2"
        >
          <span className="bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Mawulé Jean Orland ZINSOU
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-12 sm:mb-16"
        >
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
            <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Développeur Full-Stack
            </span>
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-16 sm:mb-20 max-w-4xl mx-auto px-4"
        >
          <div className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed min-h-[3em] flex items-center justify-center">
            <span>
              {displayText.split(" ").map((word, index) => {
                const wordStart =
                  displayText.split(" ").slice(0, index).join(" ").length +
                  (index > 0 ? 1 : 0);
                const wordEnd = wordStart + word.length;
                const isHighlighted =
                  wordStart <=
                    fullText.indexOf("expériences web exceptionnelles") &&
                  wordEnd >
                    fullText.indexOf("expériences web exceptionnelles") +
                      "expériences web exceptionnelles".length;

                return (
                  <span key={index} className="inline-block mr-1">
                    {isHighlighted ? (
                      <span className="text-cyan-400 font-semibold">
                        {word}
                      </span>
                    ) : (
                      <span>{word}</span>
                    )}
                  </span>
                );
              })}
            </span>
            <span className="inline-block w-1 h-5 bg-cyan-400 ml-1 animate-pulse" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex justify-center items-center gap-6 sm:gap-8 md:gap-10 mb-16 sm:mb-20"
        >
          <motion.a
            href="https://github.com/NOLCOP-CODING-GIT"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 sm:p-5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </motion.a>
          <motion.a
            href="https://www.instagram.com/harrywerland"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 sm:p-5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" />
            </svg>
          </motion.a>
          <motion.a
            href="mailto:jeanorlandzinsou@gmail.com"
            className="p-4 sm:p-5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 mb-20 sm:mb-24 px-4"
        >
          <motion.a
            href="/about"
            className="w-full sm:w-auto px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 bg-linear-to-r from-blue-500 to-purple-500 rounded-xl font-semibold text-white text-base sm:text-lg lg:text-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Découvrir mon parcours
          </motion.a>
          <motion.a
            href="/projects"
            className="w-full sm:w-auto px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 bg-white/10 backdrop-blur-sm rounded-xl font-semibold text-white text-base sm:text-lg lg:text-xl hover:bg-white/20 transition-all duration-300 border border-white/20 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Voir mes projets
          </motion.a>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          id="stats-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-5xl mx-auto px-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.7, duration: 0.5 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-white/20"
          >
            <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-3">
              {stats.experience}+
            </div>
            <div className="text-sm sm:text-base text-gray-300">
              Années d'expérience
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.8, duration: 0.5 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-white/20"
          >
            <div className="text-3xl sm:text-4xl font-bold text-purple-400 mb-3">
              {stats.projects < 10
                ? `0${stats.projects}+`
                : `${stats.projects}+`}
            </div>
            <div className="text-sm sm:text-base text-gray-300">
              Projets réalisés
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.9, duration: 0.5 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-white/20"
          >
            <div className="text-3xl sm:text-4xl font-bold text-pink-400 mb-3">
              {stats.technologies < 10
                ? `0${stats.technologies}+`
                : `${stats.technologies}+`}
            </div>
            <div className="text-sm sm:text-base text-gray-300">
              Technologies maîtrisées
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-white/20"
          >
            <div className="text-3xl sm:text-4xl font-bold text-green-400 mb-3">
              {stats.satisfaction.toFixed(2)}%
            </div>
            <div className="text-sm sm:text-base text-gray-300">
              Satisfaction client
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
