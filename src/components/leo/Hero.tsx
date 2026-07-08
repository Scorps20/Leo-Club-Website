"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Camera, Users, Mail } from "lucide-react";
import Navbar from "./Navbar";

const HERO_VIDEO_URL =
  "https://res.cloudinary.com/yaklxlgc/video/upload/v1783537866/leo-club/hero/hero-loop.mp4";

function animateOpacity(
  el: HTMLElement,
  from: number,
  to: number,
  duration: number
) {
  const start = performance.now();
  function step(now: number) {
    const elapsed = now - start;
    const t = Math.min(elapsed / duration, 1);
    el.style.opacity = String(from + (to - from) * t);
    if (t < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const fadingOutRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      video.style.opacity = "0";
      video.play().catch(() => {});
      animateOpacity(video, 0, 1, 500);
    };

    const handleTimeUpdate = () => {
      if (!video.duration) return;
      const remaining = video.duration - video.currentTime;
      if (remaining <= 0.55 && !fadingOutRef.current) {
        fadingOutRef.current = true;
        const current = parseFloat(video.style.opacity || "1");
        animateOpacity(video, current, 0, 500);
      }
    };

    const handleEnded = () => {
      video.style.opacity = "0";
      setTimeout(() => {
        video.currentTime = 0;
        video.play().catch(() => {});
        fadingOutRef.current = false;
        animateOpacity(video, 0, 1, 500);
      }, 100);
    };

    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <div className="min-h-screen relative flex flex-col overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover object-bottom"
        style={{ opacity: 0 }}
        muted
        autoPlay
        playsInline
        preload="auto"
        src={HERO_VIDEO_URL}
      />
      <div className="absolute inset-0 bg-black/30" />

      <Navbar />

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center -translate-y-[10%] md:-translate-y-[20%]">
        <h1
          className="text-6xl md:text-8xl lg:text-9xl text-white tracking-tight mb-8"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Lead. <em className="italic">Serve.</em> Inspire.
        </h1>

        <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
          <Link
            href="#membership"
            className="liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium hover:bg-white/5 transition-colors"
          >
            Become a Member
          </Link>
          <Link
            href="#rakhi"
            className="liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium hover:bg-white/5 transition-colors flex items-center gap-2"
          >
            Order Rakhis
            <ArrowRight size={16} />
          </Link>
        </div>

        <p className="max-w-xl text-white text-sm leading-relaxed px-4 mb-8">
          Empowering young leaders through service, compassion, and
          community. Discover the impact of Leo Club of Thane North Star and
          become a part of a movement that creates meaningful change.
        </p>

        <Link
          href="#about"
          className="liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium hover:bg-white/5 transition-colors"
        >
          Explore Our Journey
        </Link>
      </div>

      <div className="relative z-10 flex justify-center gap-4 pb-12">
        <a
          href="#"
          aria-label="Instagram"
          className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all"
        >
          <Camera size={20} />
        </a>
        <a
          href="#"
          aria-label="Facebook"
          className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all"
        >
          <Users size={20} />
        </a>
        <a
          href="/contact"
          aria-label="Email"
          className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all"
        >
          <Mail size={20} />
        </a>
      </div>
    </div>
  );
}
