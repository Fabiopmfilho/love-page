"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import CounterDate from "./components/CounterDate";
import PageWrapper from "./components/PageWrapper";
import HeartsBackground from "./components/HeartsBackground";

const IMAGES = [
  "/imgs/1.jpg",
  "/imgs/2.jpg",
  "/imgs/3.jpg",
  "/imgs/4.jpg",
  "/imgs/5.jpg",
  "/imgs/6.jpg",
  "/imgs/7.jpg",
  "/imgs/8.jpg",
  "/imgs/9.jpg",
];

export default function Home() {
  return (
    <PageWrapper>
      <HeartsBackground />
      <div className="grid grid-rows-[20px_1fr_20px] bg-[#81a6e0] bg-gradient-to-b from-[#81a6e0] to-[#cc7bc5] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-center z-20">
          <motion.h1
            className="text-3xl sm:text-5xl sm:max-w-7/12 font-bold text-center text-white leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Cada momento ao seu lado fez minha vida ganhar cor.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="w-full max-w-xs"
          >
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[Autoplay({ delay: 3000, stopOnInteraction: false })]}
            >
              <CarouselContent>
                {IMAGES.map((src, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Image
                        src={src}
                        alt={`Foto ${index + 1}`}
                        width={320}
                        height={200}
                        priority={index === 0}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex gap-4 items-center flex-col sm:flex-row"
          >
            <div className="flex items-center justify-center gap-2">
              <CounterDate />
            </div>
          </motion.div>

          <div className="mt-10 flex flex-col gap-4 sm:items-center">
            <motion.p
              className="text-white/80 text-lg text-center sm:text-left max-w-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.8 }}
            >
              Obrigado por tudo.
            </motion.p>
            <motion.p
              className="text-white text-4xl font-bold text-center max-w-xs flex items-center justify-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.8 }}
            >
              Eu te amo!
              <motion.span
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="text-pink-400"
              >
                ❤️
              </motion.span>
            </motion.p>
          </div>
        </main>
      </div>
    </PageWrapper>
  );
}
