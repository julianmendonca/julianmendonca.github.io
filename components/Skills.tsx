"use client";

import { motion } from "framer-motion";

const groups = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "C#", "SQL"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "HTML / CSS"],
  },
  {
    title: "Backend & APIs",
    items: ["Node.js", "REST", "GraphQL"],
  },
  {
    title: "Data & Cloud",
    items: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "AWS"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-24 py-28 md:py-36">
      <div className="container-page">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <span className="section-label">
              <span className="h-1 w-1 rounded-full bg-accent" />
              Stack
            </span>
            <h2 className="heading-display mt-6 text-4xl text-white md:text-5xl">
              Comfortable across the stack.
            </h2>
            <p className="mt-5 text-lg text-white/60">
              I lean on tools I know deeply &mdash; the kind you can trust in
              production &mdash; and I pick what fits the problem.
            </p>
          </div>

          <div className="md:col-span-7">
            <div className="grid gap-3 sm:grid-cols-2">
              {groups.map((g, i) => (
                <motion.div
                  key={g.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="glass glass-hover rounded-2xl p-5"
                >
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/40">
                    {g.title}
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {g.items.map((item) => (
                      <li
                        key={item}
                        className="text-base text-white/85"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
