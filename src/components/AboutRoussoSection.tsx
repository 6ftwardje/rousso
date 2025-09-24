"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CTAButton } from "./CTAButton";
import { TrendingUp, Brain, Shield, Users } from "lucide-react";

export function AboutRoussoSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const achievements = [
    {
      icon: TrendingUp,
      title: "8 Jaar Trading Ervaring",
      description: "Van beginner tot professioneel trader met bewezen resultaten",
    },
    {
      icon: Brain,
      title: "Psychologie Expert",
      description: "Gespecialiseerd in trading psychologie en emotionele controle",
    },
    {
      icon: Shield,
      title: "Risicomanagement",
      description: "Bewezen strategieën voor kapitaalbehoud en groei",
    },
    {
      icon: Users,
      title: "200+ Studenten",
      description: "Succesvolle coaching van traders op alle niveaus",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Over Rousso van Hoorn
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Van verlies naar winst: mijn 8-jarige reis van beginner tot
            professioneel trader
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Image & Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative">
              <img
                src="/roussa-profile.jpg"
                alt="Rousso van Hoorn"
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">
                Mijn Trading Reis
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Mijn naam is Rousso van Hoorn en ik ben een gepassioneerde trader met 8 jaar ervaring in de financiële markten. 
                Mijn reis begon als een complete beginner die alles verloor wat ik had. Maar in plaats van op te geven, 
                besloot ik te leren van mijn fouten en een systematische aanpak te ontwikkelen.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Vandaag de dag help ik andere traders om dezelfde transformatie te maken: van emotionele beslissingen 
                naar een gedisciplineerde, winstgevende trading strategie. Mijn focus ligt op risicomanagement, 
                trading psychologie en het ontwikkelen van een consistente aanpak.
              </p>
            </div>
          </motion.div>

          {/* Achievements Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-colors duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <achievement.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gray-800 rounded-2xl p-8 border border-gray-700"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Klaar om je Trading te Transformeren?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Boek een gratis strategie call en ontdek hoe je van verlies naar 
            consistente winst kunt gaan met bewezen methoden.
          </p>
          <CTAButton
            variant="primary"
            size="lg"
            onClick={scrollToContact}
          >
            Gratis Strategie Call Boeken
          </CTAButton>
        </motion.div>
      </div>
    </section>
  );
}
