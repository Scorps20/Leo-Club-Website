"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative bg-black pt-32 md:pt-44 pb-10 md:pb-14 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.03)_0%,_transparent_70%)]" />
      <div className="relative max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-white/40 text-sm tracking-widest uppercase mb-6"
        >
          About Us
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight mb-8"
        >
          Empowering{" "}
          <em
            className="italic text-white/60"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            young leaders
          </em>{" "}
          for
          <br className="hidden md:block" /> a future built on{" "}
          <em
            className="italic text-white/60"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            service, compassion, and community.
          </em>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
        >
          Leo Club of Thane North Star is a youth-led community service club
          — part of the global Leo Club movement sponsored by Lions Clubs
          International. We bring together young people who believe in
          leading through action, not words.
        </motion.p>
      </div>
    </section>
  );
}
