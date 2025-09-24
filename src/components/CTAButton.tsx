"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CTAButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  href?: string;
}

export function CTAButton({
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
  href,
}: CTAButtonProps) {
  const baseClasses = "font-semibold transition-all duration-300 hover:scale-105";
  
  const variantClasses = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl",
    secondary: "bg-gray-800 hover:bg-gray-700 text-white border border-gray-600",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const buttonElement = (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Button
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        onClick={onClick}
        asChild={!!href}
      >
        {href ? (
          <a href={href} className="block w-full h-full">
            {children}
          </a>
        ) : (
          children
        )}
      </Button>
    </motion.div>
  );

  return buttonElement;
}
