import React from "react";
import { motion } from "framer-motion";
import { Github, Instagram, Mail, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Accueil", path: "/" },
    { name: "À propos", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projets", path: "/projects" },
    { name: "Compétences", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/NOLCOP-CODING-GIT",
      label: "GitHub",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/harrywerland",
      label: "Instagram",
    },
    { icon: Mail, href: "mailto:jeanorlandzinsou@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-black/50 backdrop-blur-xl border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <div className="text-center sm:text-center lg:text-left">
              <div className="flex items-center justify-center sm:justify-center lg:justify-start gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-white/20">
                  <img
                    src="/moi.jpg"
                    alt="Mawulé ZINSOU"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white leading-tight">
                    Mawulé Jean Orland ZINSOU
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base">
                    Développeur Full-Stack
                  </p>
                </div>
              </div>
              <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base max-w-xs mx-auto sm:mx-0">
                Portfolio personnel - Développement web et mobile
              </p>
              <div className="flex flex-col gap-1 sm:gap-2 text-sm sm:text-base">
                <a
                  href="https://nolcop.unaux.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors break-all"
                >
                  🌐 nolcop.unaux.com
                </a>
                <a
                  href="tel:+2290140585835"
                  className="text-green-400 hover:text-green-300 transition-colors"
                >
                  📱 +229 01 40 58 58 35
                </a>
              </div>
              <div className="flex gap-2 sm:gap-3 mt-3 sm:mt-4 justify-center sm:justify-center lg:justify-start">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 sm:p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <social.icon size={14} className="text-white sm:size-16" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-white mb-4 sm:mb-6">
              Navigation
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              {footerLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 text-sm sm:text-base lg:text-lg py-1"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-white mb-4 sm:mb-6">
              Services
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              {[
                {
                  name: "Développement Web",
                  path: "/services/web-development",
                },
                { name: "Applications Mobile", path: "/services/mobile-apps" },
                { name: "UI/UX Design", path: "/services/ui-ux-design" },
                { name: "Solutions Cloud", path: "/services/cloud-solutions" },
                { name: "Consulting Tech", path: "/services/tech-consulting" },
              ].map((service, index) => (
                <motion.li
                  key={service.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={service.path}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 text-sm sm:text-base lg:text-lg py-1"
                  >
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full opacity-0 hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-white mb-4 sm:mb-6">
              Contact
            </h4>
            <div className="space-y-4 sm:space-y-5">
              <div className="flex items-start gap-3 text-gray-400">
                <Mail size={16} className="text-blue-400 mt-0.5 sm:size-18" />
                <div>
                  <span className="text-sm sm:text-base break-all block">
                    jeanorlandzinsou@gmail.com
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-400 rounded-full animate-pulse shrink-0" />
                <span className="text-sm sm:text-base">
                  +229 01 41 38 15 77
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-4 h-4 sm:w-5 sm:h-5 bg-blue-400 rounded-full shrink-0" />
                <span className="text-sm sm:text-base">
                  Licence professionnelle
                </span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6 sm:mt-8">
              <p className="text-gray-400 text-sm sm:text-base mb-3 font-medium">
                Newsletter
              </p>
              <div className="flex gap-2 sm:gap-3">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-3 sm:px-4 py-2 sm:py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition-colors text-sm sm:text-base"
                />
                <motion.button
                  className="px-3 sm:px-5 py-2 sm:py-2.5 bg-linear-to-r from-blue-500 to-purple-500 rounded-lg text-white font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 text-sm sm:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  OK
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm text-center sm:text-left"
            >
              <span>
                © {currentYear} Mawulé Jean Orland ZINSOU. Tous droits réservés.
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 sm:gap-4"
            >
              <button
                onClick={scrollToTop}
                className="p-2 sm:p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors group"
              >
                <ArrowUp
                  size={14}
                  className="text-white group-hover:text-blue-400 transition-colors sm:size-16"
                />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
