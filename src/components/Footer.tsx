"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Rousso van Hoorn
            </h3>
            <p className="text-gray-400 mb-4">
              8 jaar trading ervaring. Van beginner tot expert. Nu deel ik bewezen 
              strategieën met ambitieuze traders.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Navigatie</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Over Rousso
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("method")}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Mijn Methode
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Veelgestelde Vragen
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Gratis Strategie Call
                </button>
              </li>
              <li>
                <span className="text-gray-400">1-op-1 Coaching</span>
              </li>
              <li>
                <span className="text-gray-400">Trading Psychologie</span>
              </li>
              <li>
                <span className="text-gray-400">Risicomanagement</span>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-4 h-4 text-blue-400 mr-3" />
                <span className="text-gray-400">info@roussovh.nl</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-blue-400 mr-3" />
                <span className="text-gray-400">+31 6 12345678</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 text-blue-400 mr-3" />
                <span className="text-gray-400">Nederland</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Rousso van Hoorn. Alle rechten voorbehouden.
          </div>
          <div className="flex space-x-6 text-sm">
            <button
              onClick={() => scrollToTop()}
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => scrollToTop()}
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              Algemene Voorwaarden
            </button>
            <button
              onClick={() => scrollToTop()}
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              Disclaimer
            </button>
          </div>
        </motion.div>

        {/* Risk Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 p-4 bg-yellow-600/20 border border-yellow-500/30 rounded-lg"
        >
          <p className="text-yellow-200 text-sm text-center">
            <strong>Risico Disclaimer:</strong> Trading brengt aanzienlijke risico&apos;s met zich mee en kan leiden tot verlies van kapitaal. 
            Alle informatie op deze website is alleen voor educatieve doeleinden en vormt geen financieel advies. 
            Handel altijd op eigen risico en overweeg professioneel advies voordat je handelt.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}


