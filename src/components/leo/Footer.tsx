import Link from "next/link";
import { Camera, Users, Mail } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Leoism", href: "#leoism" },
  { label: "Projects", href: "#projects" },
  { label: "Gallery", href: "#gallery" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 px-6 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <p className="text-white font-semibold text-lg">
            Leo Club of Thane North Star
          </p>
          <p className="text-white/40 text-sm mt-1">
            A Leo Club sponsored by Lions Clubs International.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-white/60 hover:text-white text-sm transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#"
            aria-label="Instagram"
            className="liquid-glass rounded-full p-3 text-white/80 hover:text-white hover:bg-white/5 transition-all"
          >
            <Camera size={18} />
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="liquid-glass rounded-full p-3 text-white/80 hover:text-white hover:bg-white/5 transition-all"
          >
            <Users size={18} />
          </a>
          <Link
            href="/contact"
            aria-label="Email"
            className="liquid-glass rounded-full p-3 text-white/80 hover:text-white hover:bg-white/5 transition-all"
          >
            <Mail size={18} />
          </Link>
        </div>
      </div>

      <p className="text-white/25 text-xs text-center mt-10">
        © {new Date().getFullYear()} Leo Club of Thane North Star. All
        rights reserved.
      </p>
    </footer>
  );
}
