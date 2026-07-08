"use client";

import { motion } from "framer-motion";
import MediaPlaceholder from "./MediaPlaceholder";

const blocks = [
  {
    label: "Our Mission",
    body: "To provide a supportive and caring environment for young people to develop their leadership potential through community service — promoting peace and understanding, one project and one act of service at a time.",
  },
  {
    label: "Our Vision",
    body: "A community of empowered young leaders, united by compassion and driven to create lasting, positive change in Thane and beyond.",
  },
  {
    label: "Our Values",
    body: "Leadership. Experience. Opportunity. Integrity. Friendship. We believe service is the truest form of leadership, and that every Leo has something meaningful to give.",
  },
];

export default function MissionVisionValuesSection() {
  return (
    <section
      id="mission"
      className="bg-black py-28 md:py-40 px-6 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl text-white tracking-tight mb-16 md:mb-24"
        >
          Mission{" "}
          <em
            className="italic text-white/40"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            x
          </em>{" "}
          Vision
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <MediaPlaceholder className="rounded-3xl overflow-hidden aspect-[4/3] w-full h-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            {blocks.map((block, i) => (
              <div key={block.label}>
                {i > 0 && <div className="w-full h-px bg-white/10 my-6" />}
                <p className="text-white/40 text-xs tracking-widest uppercase mb-4">
                  {block.label}
                </p>
                <p className="text-white/70 text-base md:text-lg leading-relaxed">
                  {block.body}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
