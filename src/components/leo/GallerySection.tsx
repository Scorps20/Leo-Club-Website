"use client";

import { motion } from "framer-motion";
import MediaPlaceholder from "./MediaPlaceholder";

export default function GallerySection() {
  return (
    <section
      id="gallery"
      className="bg-black py-28 md:py-40 px-6 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-white/40 text-sm tracking-widest uppercase mb-4"
        >
          Gallery
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-6xl text-white tracking-tight mb-12 md:mb-16"
        >
          Moments worth{" "}
          <em
            className="italic text-white/50"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            remembering
          </em>
          .
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="liquid-glass rounded-2xl overflow-hidden aspect-square"
            >
              <MediaPlaceholder className="w-full h-full" label="" />
            </motion.div>
          ))}
        </div>
        <p className="text-white/30 text-sm text-center mt-8">
          Full event-by-event, year-by-year gallery coming soon.
        </p>
      </div>
    </section>
  );
}
