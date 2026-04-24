"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { ArrowDownRight, MapPin, Sparkles } from "lucide-react";
import Portrait from "./Portrait";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    // Respect reduced-motion and skip on coarse pointers (touch).
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (reduced || coarse) return;

    let raf = 0;
    let targetX = 50;
    let targetY = 35;
    let currentX = targetX;
    let currentY = targetY;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      targetX = ((e.clientX - rect.left) / rect.width) * 100;
      targetY = ((e.clientY - rect.top) / rect.height) * 100;
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const onLeave = () => {
      targetX = 50;
      targetY = 35;
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const tick = () => {
      // Smoothly lerp toward the target for a soft trailing feel.
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      el.style.setProperty("--mx", `${currentX}%`);
      el.style.setProperty("--my", `${currentY}%`);
      if (Math.abs(targetX - currentX) > 0.1 || Math.abs(targetY - currentY) > 0.1) {
        raf = requestAnimationFrame(tick);
      } else {
        raf = 0;
      }
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24"
      style={{ ["--mx" as string]: "50%", ["--my" as string]: "35%" }}
    >
      <div className="pointer-events-none absolute inset-0 hero-grid" />

      {/* Cursor-following spotlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(600px circle at var(--mx) var(--my), rgba(249,115,22,0.22), transparent 55%)",
        }}
      />
      {/* Secondary cooler halo for depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 mix-blend-screen"
        style={{
          background:
            "radial-gradient(900px circle at var(--mx) var(--my), rgba(217,70,239,0.08), transparent 60%)",
        }}
      />

      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[140px]" />

      <div className="container-page relative">
        <div className="grid items-center gap-14 md:grid-cols-12">
          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs text-white/70 backdrop-blur"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              Available for new projects
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="heading-display text-5xl leading-[1.02] text-white sm:text-6xl lg:text-7xl"
            >
              Full-stack engineer who turns ambiguous problems into{" "}
              <em className="not-italic text-accent">shipped</em> products.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-8 max-w-xl text-lg leading-relaxed text-white/65"
            >
              Hi, I&apos;m Julian &mdash; a software engineer with{" "}
              <span className="text-white">7 years</span> of experience building
              web products end-to-end, from fintech card processing to
              music-learning platforms and enterprise search.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <a href="#contact" className="btn-primary">
                Start a conversation
                <ArrowDownRight size={16} />
              </a>
              <a href="#experience" className="btn-ghost">
                See my work
              </a>
              <div className="ml-1 flex items-center gap-1.5 text-sm text-white/50">
                <MapPin size={14} className="text-white/40" />
                Buenos Aires &middot; Remote worldwide
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-16 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-white/35"
            >
              <Sparkles size={12} />
              Trusted by teams at Walmart, Easy, Keep &amp; more
            </motion.div>
          </div>

          <Portrait />
        </div>
      </div>
    </section>
  );
}
