import { main } from "motion/react-client";
import Image from "next/image";
import Featured from "@/Components/Featured";
import HeroSection from "@/Components/HeroSection";
import WhyChooseUs from "@/Components/WhyChooseUs";
import CardMoving from "@/Components/CardMoving";
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <Featured />
      <WhyChooseUs />
      <CardMoving />
    </main>
  );
}
