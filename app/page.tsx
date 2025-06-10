"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import CounterDate from "./components/CounterDate";

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
    <div className="grid grid-rows-[20px_1fr_20px] bg-[#81a6e0] bg-gradient-to-b from-[#81a6e0] to-[#cc7bc5] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-3xl sm:text-5xl font-bold text-center text-white leading-tight">
          Cada momento ao seu lado fez minha vida ganhar cor.
        </h1>
        <Carousel
          className="w-full max-w-xs"
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

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <div className="flex items-center justify-center gap-2">
            <CounterDate />
          </div>
        </div>
      </main>
    </div>
  );
}
