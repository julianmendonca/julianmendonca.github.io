import { Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10">
      <div className="container-page flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <p className="text-sm text-white/50">
          &copy; {new Date().getFullYear()} Julian Mendonca.
        </p>
        <div className="flex items-center gap-2">
          <a
            href="https://www.linkedin.com/in/julianmendonca/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/70 transition-all hover:border-white/25 hover:text-white"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="mailto:julianmendon@gmail.com"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/70 transition-all hover:border-white/25 hover:text-white"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
