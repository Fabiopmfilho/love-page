"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const NUM_HEARTS = 10; // menos corações

function generateHearts() {
  return Array.from({ length: NUM_HEARTS }).map(() => ({
    id: crypto.randomUUID(),
    left: Math.random() * 100,
    delay: Math.random() * 3, // menos atraso
    size: 18 + Math.random() * 10,
    duration: 3 + Math.random() * 2, // mais rápido
  }));
}

export default function HeartsBackground() {
  const [hearts, setHearts] = useState(generateHearts());

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts(generateHearts());
    }, 10000); // renova a cada 10s

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: "calc(100vh + 100%)", opacity: 1 }} // vai até o final da página
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
          className="absolute text-pink-400 opacity-70"
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
}
