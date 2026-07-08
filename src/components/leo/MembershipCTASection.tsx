"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function MembershipCTASection() {
  return (
    <section id="membership" className="bg-black py-20 md:py-32 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="liquid-glass rounded-3xl max-w-5xl mx-auto px-8 py-16 md:py-24 text-center"
      >
        <h2
          className="text-4xl md:text-6xl text-white tracking-tight mb-6"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Ready to <em className="italic">lead</em>, serve, and belong?
        </h2>
        <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          Membership gives you a platform to build leadership skills, form
          lifelong friendships, and make a measurable impact on your
          community — all while growing alongside people who share your
          drive to serve.
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <Link
            href="/membership"
            className="liquid-glass rounded-full px-10 py-4 text-white text-sm font-medium inline-block hover:bg-white/5 transition-colors"
          >
            Become a Member
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
