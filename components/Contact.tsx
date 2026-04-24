"use client";

import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { Check, Linkedin, Loader2, Mail, MapPin, Send } from "lucide-react";

type Status =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "success" }
  | { kind: "error"; message: string };

export default function Contact() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      message: String(data.get("message") || "").trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setStatus({ kind: "error", message: "Please fill in every field." });
      return;
    }

    setStatus({ kind: "loading" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error || "Something went wrong.");
      }
      setStatus({ kind: "success" });
      form.reset();
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong.";
      setStatus({ kind: "error", message });
    }
  }

  return (
    <section id="contact" className="relative scroll-mt-24 py-28 md:py-36">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-8 md:p-14">
          <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-accent/15 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-[120px]" />

          <div className="relative grid gap-12 md:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
              className="md:col-span-5"
            >
              <span className="section-label">
                <span className="h-1 w-1 rounded-full bg-accent" />
                Contact
              </span>
              <h2 className="heading-display mt-6 text-4xl text-white md:text-5xl">
                Let&apos;s build something.
              </h2>
              <p className="mt-5 text-lg text-white/60">
                Tell me about the problem you&apos;re solving. I read every
                message and typically reply within a day.
              </p>

              <div className="mt-10 space-y-3">
                <a
                  href="mailto:julianmendon@gmail.com"
                  className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                    <Mail size={15} />
                  </span>
                  julianmendon@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/julianmendonca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                    <Linkedin size={15} />
                  </span>
                  linkedin.com/in/julianmendonca
                </a>
                <div className="flex items-center gap-3 text-sm text-white/70">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                    <MapPin size={15} />
                  </span>
                  Buenos Aires &middot; Remote
                </div>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              onSubmit={onSubmit}
              className="md:col-span-7"
              noValidate
            >
              <div className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Your name" name="name" placeholder="Ada Lovelace" />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="ada@company.com"
                  />
                </div>
                <Field
                  label="Message"
                  name="message"
                  as="textarea"
                  placeholder="Tell me a bit about the project, timeline, and goals."
                />

                <div className="mt-2 flex flex-col-reverse items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p
                    className={`text-sm transition-colors ${
                      status.kind === "error"
                        ? "text-red-400"
                        : status.kind === "success"
                          ? "text-emerald-400"
                          : "text-white/45"
                    }`}
                  >
                    {status.kind === "error" && status.message}
                    {status.kind === "success" &&
                      "Message sent. I'll get back to you shortly."}
                    {status.kind === "idle" &&
                      "Your message goes straight to my inbox."}
                    {status.kind === "loading" && "Sending..."}
                  </p>

                  <button
                    type="submit"
                    disabled={
                      status.kind === "loading" || status.kind === "success"
                    }
                    className="btn-primary min-w-[170px] disabled:cursor-not-allowed disabled:opacity-80"
                  >
                    {status.kind === "loading" ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending
                      </>
                    ) : status.kind === "success" ? (
                      <>
                        <Check size={16} />
                        Sent
                      </>
                    ) : (
                      <>
                        Send message
                        <Send size={14} />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  as?: "input" | "textarea";
};

function Field({ label, name, type = "text", placeholder, as = "input" }: FieldProps) {
  const baseClass =
    "w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-[15px] text-white placeholder:text-white/30 outline-none transition-all duration-200 focus:border-accent/60 focus:bg-white/[0.04] focus:ring-4 focus:ring-accent/10";
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-[0.16em] text-white/45">
        {label}
      </span>
      {as === "textarea" ? (
        <textarea
          name={name}
          placeholder={placeholder}
          rows={5}
          className={`${baseClass} resize-none`}
          required
        />
      ) : (
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          className={baseClass}
          required
        />
      )}
    </label>
  );
}
