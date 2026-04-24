"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Check, Copy, Linkedin, Mail, MapPin } from "lucide-react";

const CONTACT_EMAIL = "julianmendon@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/julianmendonca/";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard blocked — the visible email is still selectable manually */
    }
  }

  return (
    <section id="contact" className="relative scroll-mt-24 py-28 md:py-36">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-10 md:p-16">
          <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-accent/15 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-[120px]" />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative mx-auto max-w-3xl text-center"
          >
            <span className="section-label">
              <span className="h-1 w-1 rounded-full bg-accent" />
              Contact
            </span>

            <h2 className="heading-display mt-6 text-4xl text-white md:text-6xl">
              Let&apos;s build something.
            </h2>

            <p className="mt-6 text-lg text-white/60 md:text-xl">
              The fastest way to reach me is email. I read every message and
              typically reply within a day.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="btn-primary group gap-3 px-6 py-4 text-base"
              >
                <Mail size={18} />
                <span>{CONTACT_EMAIL}</span>
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>
              <button
                type="button"
                onClick={copyEmail}
                aria-label="Copy email to clipboard"
                className="btn-ghost gap-2 px-5 py-4 text-base"
              >
                {copied ? (
                  <>
                    <Check size={16} className="text-emerald-400" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    Copy
                  </>
                )}
              </button>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-white/50">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-white"
              >
                <Linkedin size={14} />
                linkedin.com/in/julianmendonca
              </a>
              <span className="inline-flex items-center gap-2">
                <MapPin size={14} />
                Buenos Aires &middot; Remote worldwide
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
