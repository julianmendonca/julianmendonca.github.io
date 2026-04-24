"use client";

import { motion } from "framer-motion";
import { Compass, Lightbulb, Rocket } from "lucide-react";

const values = [
  {
    icon: Compass,
    title: "Problem-first",
    body: "I start with the problem, not the tech. I understand the requirement, the user, and the constraint — then pick the tool.",
  },
  {
    icon: Rocket,
    title: "Proactive",
    body: "I propose, I ship, and I follow up. I ask when something needs clarifying, but I don't stall — I move the work forward.",
  },
  {
    icon: Lightbulb,
    title: "Maximum value, minimum waste",
    body: "Great quality, sensible scope. I prefer the simplest thing that solves the real problem, delivered sooner rather than later.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-28 md:py-36">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid gap-12 md:grid-cols-12"
        >
          <div className="md:col-span-5">
            <span className="section-label">
              <span className="h-1 w-1 rounded-full bg-accent" />
              About
            </span>
            <h2 className="heading-display mt-6 text-4xl text-white md:text-5xl">
              Not just an engineer &mdash; a problem solver.
            </h2>
          </div>

          <div className="md:col-span-7">
            <p className="text-lg leading-relaxed text-white/70 md:text-xl">
              I identify the problem and find the right solution for the right
              task &mdash; making sure we get the most value in the least time,
              without compromising quality. I love writing code, but I love
              planning and solving problems even more.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-white/70 md:text-xl">
              I lead with suggestions and action, not with blockers. If I need
              input, I&apos;ll ask &mdash; but I&apos;m the kind of engineer who
              keeps things moving rather than waiting for the perfect brief.
            </p>
          </div>
        </motion.div>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true, amount: 0.3 }}
              className="glass glass-hover rounded-2xl p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/20">
                <v.icon size={18} />
              </div>
              <h3 className="mt-5 text-lg font-medium text-white">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {v.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
