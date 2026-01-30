"use client";

import { motion, useInView } from "framer-motion";
import * as React from "react";

interface TimelineContentProps {
  children: React.ReactNode;
  animationNum: number;
  timelineRef: React.RefObject<HTMLElement>;
}

export function TimelineContent({
  children,
  animationNum,
  timelineRef,
}: TimelineContentProps) {
  const isInView = useInView(timelineRef, { once: true, amount: 0.2 });

  const revealVariants = {
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: animationNum * 0.2,
        duration: 0.5,
      },
    },
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={revealVariants}
    >
      {children}
    </motion.div>
  );
}
