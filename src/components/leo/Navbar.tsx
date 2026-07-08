import Link from "next/link";
import { HeartHandshake } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Leoism", href: "#leoism" },
  { label: "Projects", href: "#projects" },
  { label: "Gallery", href: "#gallery" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <div className="relative z-20 px-6 py-6">
      <div className="liquid-glass rounded-full max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center min-w-0">
          <HeartHandshake size={22} className="text-white shrink-0" />
          <span className="ml-2 text-white font-semibold text-sm sm:text-base lg:text-lg whitespace-nowrap">
            Leo Club
          </span>
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 ml-8 shrink-0">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-white/80 hover:text-white text-sm font-medium transition-colors whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <Link
            href="#membership"
            className="hidden sm:inline text-white text-sm font-medium hover:text-white/80 transition-colors whitespace-nowrap"
          >
            Become a Member
          </Link>
          <Link
            href="#rakhi"
            className="liquid-glass rounded-full px-4 sm:px-6 py-2 text-white text-sm font-medium hover:bg-white/5 transition-colors whitespace-nowrap"
          >
            Order Rakhis
          </Link>
        </div>
      </div>
    </div>
  );
}
