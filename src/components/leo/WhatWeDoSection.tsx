"use client";

import { motion } from "framer-motion";
import GlassCard, { CardData } from "./GlassCard";

const cards: CardData[] = [
  {
    tag: "Leadership",
    title: "Leadership Development",
    description:
      "Hands-on leadership roles, workshops, and mentorship that turn members into confident, capable leaders.",
  },
  {
    tag: "Service",
    title: "Community Service",
    description:
      "Regular service projects that address real needs in our neighborhoods, from food drives to relief work.",
  },
  {
    tag: "Health",
    title: "Health & Wellness",
    description:
      "Blood donation camps, health check-up drives, and awareness campaigns that keep our community healthy.",
  },
  {
    tag: "Education",
    title: "Education",
    description:
      "Supporting access to learning through drives, mentoring, and initiatives that open doors for young minds.",
  },
  {
    tag: "Environment",
    title: "Environment",
    description:
      "Tree plantations, clean-up drives, and sustainability projects for a greener Thane.",
  },
  {
    tag: "Growth",
    title: "Fundraising & Youth Development",
    description:
      "Creative fundraising initiatives like Pyaar Ka Bandhan that fund our projects while building real-world skills.",
  },
];

export default function WhatWeDoSection() {
  return (
    <section
      id="what-we-do"
      className="relative bg-black py-28 md:py-40 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.02)_0%,_transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex items-end justify-between mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl text-white tracking-tight">
            What we do
          </h2>
          <span className="hidden md:block text-white/40 text-sm">
            Our focus areas
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
