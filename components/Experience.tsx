"use client";

import { motion } from "framer-motion";

type Role = {
  company: string;
  role: string;
  summary: string;
  highlights: string[];
  stack: string[];
  accent: string;
};

const roles: Role[] = [
  {
    company: "Keep",
    role: "Full-stack Engineer",
    summary:
      "A credit card company for Canadian businesses. I work on the card processing system — ensuring transactions settle smoothly and that balances and statements stay correct.",
    highlights: [
      "Card transaction processing & reconciliation",
      "Balance and statement integrity across ledgers",
      "Reliable, auditable financial workflows",
    ],
    stack: [
      "Node",
      "TypeScript",
      "React",
      "Next.js",
      "REST",
      "GraphQL",
      "AWS",
      "Redis",
      "PostgreSQL",
      "MongoDB",
    ],
    accent: "from-orange-400/40 to-amber-600/30",
  },
  {
    company: "Capicua",
    role: "Full-stack Engineer",
    summary:
      "Built a music-teaching platform — a virtual classroom with deeply interactive features: in-browser video recording and editing, a tool to create lyrics and tabs synced to audio, file uploads, homework, and grading.",
    highlights: [
      "In-browser video recording & editing",
      "Lyrics and tabs synchronized to audio playback",
      "Virtual classroom with homework & grading",
    ],
    stack: [
      "Node",
      "TypeScript",
      "React",
      "REST",
      "GraphQL",
      "AWS",
      "SQL",
    ],
    accent: "from-fuchsia-400/30 to-purple-600/30",
  },
  {
    company: "BrainDW",
    role: "Full-stack Engineer",
    summary:
      "Built search engines and product recommendation engines for e-commerce — shipping production systems for large retailers including Walmart and Easy.",
    highlights: [
      "Search relevance at retail scale",
      "Personalized product recommendations",
      "Clients included Walmart & Easy",
    ],
    stack: [
      "Node",
      "TypeScript",
      "React",
      "C#",
      "REST",
      "Elasticsearch",
      "AWS",
      "SQL",
    ],
    accent: "from-sky-400/30 to-cyan-600/30",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-24 py-28 md:py-36">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-label">
            <span className="h-1 w-1 rounded-full bg-accent" />
            Experience
          </span>
          <h2 className="heading-display mt-6 text-4xl text-white md:text-5xl">
            Seven years, three very different domains.
          </h2>
          <p className="mt-5 text-lg text-white/60">
            Fintech, ed-tech, and e-commerce &mdash; across every role,
            front-end and back-end, from the data model to the UI.
          </p>
        </div>

        <div className="mt-16 grid gap-5">
          {roles.map((role, i) => (
            <motion.article
              key={role.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              viewport={{ once: true, amount: 0.2 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.035] md:p-10"
            >
              <div
                className={`pointer-events-none absolute -right-40 -top-40 h-80 w-80 rounded-full bg-gradient-to-br ${role.accent} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100`}
              />

              <div className="relative grid gap-8 md:grid-cols-12">
                <div className="md:col-span-4">
                  <h3 className="text-2xl font-medium tracking-tight text-white md:text-3xl">
                    {role.company}
                  </h3>
                  <p className="mt-1 text-sm text-white/50">{role.role}</p>

                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {role.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-white/60"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-8">
                  <p className="text-base leading-relaxed text-white/75 md:text-lg">
                    {role.summary}
                  </p>

                  <ul className="mt-6 space-y-2">
                    {role.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-3 text-sm text-white/65"
                      >
                        <span className="mt-[7px] h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
