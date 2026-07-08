import Hero from "@/components/leo/Hero";
import AboutSection from "@/components/leo/AboutSection";
import LeoismSection from "@/components/leo/LeoismSection";
import MissionVisionValuesSection from "@/components/leo/MissionVisionValuesSection";
import WhatWeDoSection from "@/components/leo/WhatWeDoSection";
import SignatureProjectsSection from "@/components/leo/SignatureProjectsSection";
import GallerySection from "@/components/leo/GallerySection";
import MembershipCTASection from "@/components/leo/MembershipCTASection";
import RakhiCTASection from "@/components/leo/RakhiCTASection";
import Footer from "@/components/leo/Footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-black">
      <Hero />
      <AboutSection />
      <LeoismSection />
      <MissionVisionValuesSection />
      <WhatWeDoSection />
      <SignatureProjectsSection />
      <GallerySection />
      <MembershipCTASection />
      <RakhiCTASection />
      <Footer />
    </div>
  );
}
