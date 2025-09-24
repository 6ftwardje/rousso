"use client";

import { CTAButton } from "./CTAButton";
import { motion } from "framer-motion";
import { TrendingUp, Users, Award } from "lucide-react";

export function HeroSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90">
        <div className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center opacity-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-sm font-medium mb-8"
          >
            <Award className="w-4 h-4 mr-2" />
            8 Jaar Trading Ervaring
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Beheers de Markten met{" "}
            <span className="text-blue-400">Rousso van Hoorn</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            8 jaar trading ervaring. Van beginner tot expert. Nu deel ik bewezen
            strategieën met ambitieuze traders zoals jij.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            <div className="flex items-center text-center">
              <TrendingUp className="w-6 h-6 text-green-400 mr-2" />
              <div>
                <div className="text-2xl font-bold text-white">85%</div>
                <div className="text-sm text-gray-400">Succesvolle Trades</div>
              </div>
            </div>
            <div className="flex items-center text-center">
              <Users className="w-6 h-6 text-blue-400 mr-2" />
              <div>
                <div className="text-2xl font-bold text-white">200+</div>
                <div className="text-sm text-gray-400">Studenten Gecoacht</div>
              </div>
            </div>
            <div className="flex items-center text-center">
              <Award className="w-6 h-6 text-yellow-400 mr-2" />
              <div>
                <div className="text-2xl font-bold text-white">8</div>
                <div className="text-sm text-gray-400">Jaren Ervaring</div>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <CTAButton
              variant="primary"
              size="lg"
              onClick={scrollToContact}
              className="w-full sm:w-auto"
            >
              Start Je Trading Reis
            </CTAButton>
            <CTAButton
              variant="outline"
              size="lg"
              onClick={scrollToContact}
              className="w-full sm:w-auto"
            >
              Boek 1-op-1 Call
            </CTAButton>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-16 text-sm text-gray-400"
          >
            <p>✓ Gratis strategie consultatie</p>
            <p>✓ Geen verplichtingen</p>
            <p>✓ Persoonlijke begeleiding</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

