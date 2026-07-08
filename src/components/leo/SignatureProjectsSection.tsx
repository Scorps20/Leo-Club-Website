"use client";

import { motion } from "framer-motion";
import GlassCard, { CardData } from "./GlassCard";

const cards: CardData[] = [
  {
    tag: "Signature Event",
    title: "Pyaar Ka Bandhan",
    description:
      "Handmade rakhis crafted with love, sold to spread the bond of friendship and raise funds for our service projects.",
  },
  {
    tag: "Community Service",
    title: "Aahar",
    description:
      "Food distribution drives ensuring no one in our community goes hungry.",
  },
  {
    tag: "Youth Development",
    title: "Umang",
    description:
      "A celebration of talent, energy, and expression for young people to shine.",
  },
  {
    tag: "Leadership",
    title: "Installation & Induction",
    description:
      "The ceremony that welcomes new Leos and installs each year's leadership team.",
  },
  {
    tag: "Health",
    title: "Blood Donation",
    description: "Regular blood donation camps that save lives across Thane.",
  },
  {
    tag: "Environment",
    title: "Tree Plantation",
    description:
      "Planting trees and building a greener, more sustainable Thane for tomorrow.",
  },
];

export default function SignatureProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-black py-28 md:py-40 px-6 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex items-end justify-between mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl text-white tracking-tight">
            Signature Projects
          </h2>
          <span className="hidden md:block text-white/40 text-sm">
            Our flagship events
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {cards.map((card, i) => (
            <GlassCard key={card.title} index={i} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
