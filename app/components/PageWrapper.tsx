"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [started, setStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleStart = () => {
    setStarted(true);
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.1;
      audio.play();
    }
  };

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <>
      <audio ref={audioRef} src="/audio/idiota.mp3" loop />
      <AnimatePresence>
        {!started && (
          <motion.div
            className="fixed inset-0 bg-gradient-to-b from-[#81a6e0] to-[#cc7bc5] flex items-center justify-center z-50"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.button
              onClick={handleStart}
              className="bg-white/10 px-6 py-3 text-white text-xl rounded-lg border border-white/30 hover:bg-white/20 transition shadow-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              Clique aqui
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {started && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-0"
        >
          {children}

          {/* Audio Controls */}
          <div className="fixed bottom-4 right-4 flex items-center gap-2 z-50">
            <button
              onClick={togglePlay}
              className="bg-white/10 p-2 rounded-full text-white hover:bg-white/20 transition"
            >
              {isPlaying ? <Pause size={18} /> : <Play size={18} />}
            </button>

            <button
              onClick={toggleMute}
              className="bg-white/10 p-2 rounded-full text-white hover:bg-white/20 transition"
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
}
