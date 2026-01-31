"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface Feature {
  step: string;
  title?: string;
  content: string;
  image: string;
}

interface FeatureStepsProps {
  features: Feature[];
  className?: string;
  title?: string;
  autoPlayInterval?: number;
  imageHeight?: string;
}

export function FeatureSteps({
  features,
  className,
  title = "How to get Started",
  autoPlayInterval = 3000,
  imageHeight = "h-[400px]",
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100));
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length);
        setProgress(0);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [progress, features.length, autoPlayInterval]);

  return (
    <div className={cn("p-8 md:p-12", className)}>
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center"
        >
          {title}
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
          {/* Steps List */}
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-6 cursor-pointer"
                  initial={{ opacity: 0.7 }}
                  animate={{ opacity: index === currentFeature ? 1 : 0.5 }}
                  onClick={() => {
                    setCurrentFeature(index);
                    setProgress(0);
                  }}
                >
                  <motion.div
                    className={cn(
                      "w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2 transition-colors duration-300",
                      index === currentFeature
                        ? "bg-primary border-primary text-primary-foreground scale-110"
                        : index < currentFeature
                          ? "bg-primary/20 border-primary text-primary"
                          : "bg-muted border-border text-muted-foreground"
                    )}
                  >
                    {index < currentFeature ? (
                      <span className="text-sm font-bold">✓</span>
                    ) : (
                      <span className="text-sm font-semibold">{index + 1}</span>
                    )}
                  </motion.div>

                  <div className="flex-1">
                    <h3
                      className={cn(
                        "text-xl font-semibold transition-colors duration-300",
                        index === currentFeature
                          ? "text-primary"
                          : "text-muted-foreground"
                      )}
                    >
                      {feature.title || feature.step}
                    </h3>

                    <p
                      className={cn(
                        "text-sm md:text-base mt-2 transition-colors duration-300 leading-relaxed",
                        index === currentFeature
                          ? "text-foreground"
                          : "text-muted-foreground"
                      )}
                    >
                      {feature.content}
                    </p>

                    {/* Progress bar for current step */}
                    {index === currentFeature && (
                      <div className="mt-3 h-1 w-full bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-primary rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${progress}%` }}
                          transition={{ duration: 0.1 }}
                        />
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div
            className={cn(
              "w-full md:w-1/2 order-1 md:order-2",
              imageHeight
            )}
          >
            <AnimatePresence mode="wait">
              {features.map(
                (feature, index) =>
                  index === currentFeature && (
                    <motion.div
                      key={index}
                      className="relative w-full h-full rounded-2xl overflow-hidden border border-border shadow-lg"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                    >
                      <img
                        src={feature.image}
                        alt={feature.title || feature.step}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
