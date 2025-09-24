"use client";

import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutRoussoSection } from "@/components/AboutRoussoSection";
import { LeadCaptureSection } from "@/components/LeadCaptureSection";
import { Footer } from "@/components/Footer";
import { FAQAccordion } from "@/components/FAQAccordion";
import { TestimonialCard } from "@/components/TestimonialCard";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Shield, Brain, Target, Users, Award } from "lucide-react";

export default function Home() {
  // FAQ Data
  const faqItems = [
    {
      question: "Kan ik echt leren om te handelen?",
      answer: "Absoluut! Met de juiste begeleiding en discipline kan iedereen leren handelen. Het belangrijkste is om te beginnen met een systematische aanpak en goede risicomanagement. Ik help je stap voor stap door dit proces."
    },
    {
      question: "Hoeveel kapitaal heb ik nodig om te beginnen?",
      answer: "Je kunt beginnen met een klein bedrag, maar ik raad aan om te beginnen met geld dat je kunt missen. Het gaat erom dat je eerst de vaardigheden leert voordat je grote bedragen riskeert. We bespreken dit tijdens de gratis strategie call."
    },
    {
      question: "Wat is het succespercentage van je studenten?",
      answer: "Van de studenten die mijn volledige coaching programma volgen, behaalt ongeveer 70-80% consistente winstgevendheid binnen 6-12 maanden. Het succes hangt af van discipline, doorzettingsvermogen en het volgen van de geleerde strategieën."
    },
    {
      question: "Hoeveel tijd moet ik investeren in trading?",
      answer: "Dit hangt af van je doelen en beschikbare tijd. Sommige traders handelen full-time, anderen part-time. Ik help je een aanpak te vinden die past bij jouw levensstijl en doelen."
    },
    {
      question: "Wat maakt jouw methode anders?",
      answer: "Mijn aanpak combineert technische analyse met trading psychologie en risicomanagement. Ik focus niet alleen op winst maken, maar ook op het behouden van kapitaal en het ontwikkelen van een duurzame trading mentaliteit."
    },
    {
      question: "Is er een garantie op winst?",
      answer: "Geen enkele trader kan winst garanderen. Trading brengt altijd risico's met zich mee. Wat ik wel kan garanderen is dat je de beste tools, strategieën en mentale aanpak krijgt om je kansen op succes te maximaliseren."
    }
  ];

  // Testimonials Data
  const testimonials = [
    {
      name: "Mark de Vries",
      role: "Part-time Trader",
      content: "Rousso heeft me geholpen om van een emotionele trader naar een gedisciplineerde professional te gaan. Mijn winstgevendheid is met 300% gestegen sinds ik zijn coaching volg.",
      rating: 5,
    },
    {
      name: "Sarah Janssen",
      role: "Beginner Trader",
      content: "Als complete beginner was ik bang om alles te verliezen. Rousso's aanpak gaf me het vertrouwen en de kennis om veilig te beginnen. Nu handel ik al 6 maanden winstgevend!",
      rating: 5,
    },
    {
      name: "Tom Bakker",
      role: "Ervaren Trader",
      content: "Na jaren van inconsistentie heeft Rousso me geholpen om mijn trading psychologie te verbeteren. Nu maak ik consistente winst en slaap ik beter 's nachts.",
      rating: 5,
    },
  ];

  // Method Steps
  const methodSteps = [
    {
      icon: Target,
      title: "1. Analyse & Planning",
      description: "We analyseren je huidige situatie en ontwikkelen een persoonlijk trading plan dat past bij jouw doelen en risicotolerantie."
    },
    {
      icon: Shield,
      title: "2. Risicomanagement",
      description: "Je leert hoe je je kapitaal kunt beschermen met bewezen risicomanagement technieken en position sizing."
    },
    {
      icon: Brain,
      title: "3. Psychologie & Discipline",
      description: "We werken aan je trading psychologie om emotionele beslissingen te voorkomen en discipline te ontwikkelen."
    },
    {
      icon: TrendingUp,
      title: "4. Strategie & Executie",
      description: "Je krijgt toegang tot bewezen trading strategieën en leert hoe je deze consistent kunt uitvoeren."
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      
      <HeroSection />
      
      {/* Social Proof Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Bewezen Resultaten
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Echte traders, echte resultaten. Zie hoe mijn studenten hun trading hebben getransformeerd.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                {...testimonial}
              />
            ))}
          </div>

          {/* Performance Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">85%</div>
              <div className="text-gray-400">Succesvolle Trades</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">200+</div>
              <div className="text-gray-400">Studenten Gecoacht</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">8</div>
              <div className="text-gray-400">Jaren Ervaring</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">70%</div>
              <div className="text-gray-400">Succesvolle Studenten</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem - Process - Proof Section */}
      <section id="method" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Mijn Bewezen Methode
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Van verlies naar winst in 4 stappen. Een systematische aanpak die werkt.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900 border-gray-800 hover:border-blue-500 transition-colors duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <step.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AboutRoussoSection />

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Veelgestelde Vragen
            </h2>
            <p className="text-xl text-gray-300">
              Alles wat je moet weten over trading en mijn coaching.
            </p>
          </motion.div>

          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <LeadCaptureSection />
      
      <Footer />
    </main>
  );
}