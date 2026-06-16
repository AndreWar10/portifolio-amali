import { Hero } from "@/components/Hero";
import { SobreSection } from "@/components/sections/SobreSection";
import { AudiovisualSection } from "@/components/sections/AudiovisualSection";
import { CampanhasSection } from "@/components/sections/CampanhasSection";
import { FotografiaSection } from "@/components/sections/FotografiaSection";
import { RadioSection } from "@/components/sections/RadioSection";
import { TccSection } from "@/components/sections/TccSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SobreSection />
      <AudiovisualSection />
      <CampanhasSection />
      <FotografiaSection />
      <RadioSection />
      <TccSection />
    </>
  );
}
