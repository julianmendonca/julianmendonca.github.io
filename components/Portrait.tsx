"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Portrait() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-[360px] md:col-span-5 md:max-w-none"
    >
      <div className="relative">
        <div className="overflow-hidden rounded-[1.75rem] border border-white/10">
          <Image
            src="/julian.png"
            alt="Portrait of Julian Mendonca"
            width={900}
            height={1200}
            priority
            className="block h-full w-full object-cover"
            sizes="(min-width: 768px) 40vw, 360px"
          />
        </div>

        <div className="absolute -bottom-5 left-0 right-0 flex justify-center md:-bottom-4 md:justify-end md:pr-4">
          <div className="flex items-center gap-2.5 rounded-full border border-white/10 bg-bg/70 px-4 py-2 text-xs text-white/70 shadow-lg shadow-black/40 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400" />
            <span className="whitespace-nowrap">Based in Buenos Aires</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
