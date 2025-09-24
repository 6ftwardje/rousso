"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CTAButton } from "./CTAButton";
import { Calendar, Mail, Phone, User, Clock } from "lucide-react";

export function LeadCaptureSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    preferredTime: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const experienceLevels = [
    "Complete beginner",
    "Enige ervaring (minder dan 1 jaar)",
    "Gemiddeld (1-3 jaar)",
    "Ervaren (3+ jaar)",
    "Professioneel",
  ];

  const timeSlots = [
    "Ochtend (9:00 - 12:00)",
    "Middag (12:00 - 17:00)",
    "Avond (17:00 - 20:00)",
    "Weekend",
  ];

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-green-600/20 border border-green-500/30 rounded-2xl p-8"
          >
            <div className="text-green-400 text-6xl mb-4">✓</div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Bedankt voor je interesse!
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              Ik heb je aanvraag ontvangen en neem binnen 24 uur contact met je op 
              om je gratis strategie call in te plannen.
            </p>
            <p className="text-gray-400">
              Controleer je email voor verdere instructies.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Boek Je Gratis Strategie Call
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ontdek hoe je je trading kunt transformeren van verlies naar winst. 
            Geen verplichtingen, alleen waardevolle inzichten.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center">
                  <Calendar className="w-6 h-6 mr-2 text-blue-400" />
                  Strategie Call Aanvragen
                </CardTitle>
                <p className="text-gray-400">
                  Vul het formulier in en ik neem binnen 24 uur contact met je op.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        <User className="w-4 h-4 inline mr-1" />
                        Naam *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-gray-800 border-gray-700 text-white"
                        placeholder="Je volledige naam"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        <Mail className="w-4 h-4 inline mr-1" />
                        Email *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-gray-800 border-gray-700 text-white"
                        placeholder="je@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        <Phone className="w-4 h-4 inline mr-1" />
                        Telefoon
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="bg-gray-800 border-gray-700 text-white"
                        placeholder="+31 6 12345678"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        <Clock className="w-4 h-4 inline mr-1" />
                        Voorkeurstijd
                      </label>
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Selecteer voorkeurstijd</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Trading Ervaring *
                    </label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Selecteer je ervaringsniveau</option>
                      {experienceLevels.map((level) => (
                        <option key={level} value={level}>
                          {level}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Bericht (optioneel)
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-gray-800 border-gray-700 text-white"
                      placeholder="Vertel me over je huidige trading situatie en doelen..."
                      rows={4}
                    />
                  </div>

                  <CTAButton
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Versturen..." : "Gratis Strategie Call Boeken"}
                  </CTAButton>

                  <p className="text-xs text-gray-500 text-center">
                    Door dit formulier in te vullen ga je akkoord met onze privacy policy. 
                    Je gegevens worden veilig opgeslagen en niet gedeeld met derden.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-xl text-white">
                  Wat krijg je tijdens de call?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Persoonlijke Analyse</h4>
                    <p className="text-gray-400 text-sm">
                      Analyse van je huidige trading aanpak en identificatie van verbeterpunten
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Strategie Advies</h4>
                    <p className="text-gray-400 text-sm">
                      Concrete tips voor risicomanagement en winstgevende trades
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Psychologie Coaching</h4>
                    <p className="text-gray-400 text-sm">
                      Inzicht in emotionele valkuilen en hoe deze te overwinnen
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Vervolgstappen</h4>
                    <p className="text-gray-400 text-sm">
                      Duidelijk plan voor je verdere ontwikkeling als trader
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

          </motion.div>
        </div>
      </div>
    </section>
  );
}

