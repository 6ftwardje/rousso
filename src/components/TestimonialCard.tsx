"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating?: number;
  image?: string;
  className?: string;
}

export function TestimonialCard({
  name,
  role,
  content,
  rating = 5,
  image,
  className,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={className}
    >
      <Card className="bg-gray-900 border-gray-800 hover:border-blue-500 transition-colors duration-300 h-full">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            {image && (
              <img
                src={image}
                alt={name}
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
            )}
            <div>
              <h4 className="font-semibold text-white">{name}</h4>
              <p className="text-gray-400 text-sm">{role}</p>
            </div>
          </div>
          
          <div className="flex mb-4">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          
          <blockquote className="text-gray-300 italic">
            "{content}"
          </blockquote>
        </CardContent>
      </Card>
    </motion.div>
  );
}
