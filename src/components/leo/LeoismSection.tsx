"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import MediaPlaceholder from "./MediaPlaceholder";

export default function LeoismSection() {
  return (
    <section
      id="leoism"
      className="bg-black pt-6 md:pt-10 pb-20 md:pb-32 px-6 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9 }}
        className="relative max-w-6xl mx-auto rounded-3xl overflow-hidden aspect-video"
      >
        <MediaPlaceholder className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div className="liquid-glass rounded-2xl p-6 md:p-8 max-w-md">
            <p className="text-white/50 text-xs tracking-widest uppercase mb-3">
              What is Leoism
            </p>
            <p className="text-white text-sm md:text-base leading-relaxed">
              Leadership. Experience. Opportunity. Leoism is the guiding
              philosophy behind every Leo Club — a promise that young people
              are given a real platform to lead, genuine experience to grow
              from, and the opportunity to serve their community and become
              the leaders of tomorrow.
            </p>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="#projects"
              className="liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium inline-block"
            >
              Explore Our Projects
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
