"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import MediaPlaceholder from "./MediaPlaceholder";

export type CardData = {
  tag: string;
  title: string;
  description: string;
};

export default function GlassCard({
  tag,
  title,
  description,
  index,
}: CardData & { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      className="liquid-glass rounded-3xl overflow-hidden group"
    >
      <div className="relative aspect-video overflow-hidden">
        <MediaPlaceholder className="w-full h-full transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>
      <div className="p-6 md:p-8">
        <div className="flex items-start justify-between mb-4">
          <span className="text-white/40 text-xs tracking-widest uppercase">
            {tag}
          </span>
          <div className="liquid-glass rounded-full p-2">
            <ArrowUpRight size={16} className="text-white" />
          </div>
        </div>
        <h3 className="text-white text-xl md:text-2xl mb-3 tracking-tight">
          {title}
        </h3>
        <p className="text-white/50 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
