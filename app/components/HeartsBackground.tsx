"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const NUM_HEARTS = 20;

function generateHearts() {
  return Array.from({ length: NUM_HEARTS }).map(() => ({
    id: crypto.randomUUID(),
    left: Math.random() * 95,
    delay: Math.random() * 3,
    size: 18 + Math.random() * 10,
    duration: 3 + Math.random() * 2,
  }));
}

export default function HeartsBackground() {
  const [hearts, setHearts] = useState(generateHearts());

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts(generateHearts());
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: "110vh", opacity: 1 }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "easeIn",
          }}
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
          }}
          className="absolute top-0 text-pink-400 opacity-70"
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
}
