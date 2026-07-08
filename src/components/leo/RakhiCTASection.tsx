"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function RakhiCTASection() {
  return (
    <section id="rakhi" className="bg-black pb-28 md:pb-40 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="liquid-glass rounded-3xl max-w-5xl mx-auto px-8 py-16 md:py-24 text-center"
      >
        <p className="text-white/40 text-sm tracking-widest uppercase mb-4">
          Pyaar Ka Bandhan
        </p>
        <h2
          className="text-4xl md:text-6xl text-white tracking-tight mb-6"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          This Raksha Bandhan, tie a bond that{" "}
          <em className="italic">gives back</em>.
        </h2>
        <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          Every handmade rakhi you order funds our community service
          projects throughout the year. Beautiful, meaningful, and made with
          purpose.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/rakhi"
              className="liquid-glass rounded-full px-10 py-4 text-white text-sm font-medium inline-block hover:bg-white/5 transition-colors"
            >
              Browse Rakhis
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="#projects"
              className="liquid-glass rounded-full px-10 py-4 text-white text-sm font-medium inline-block hover:bg-white/5 transition-colors"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
