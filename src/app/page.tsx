import { main } from "motion/react-client";
import Image from "next/image";
import Footer from "@/Components/Footer";
import Featured from "@/Components/Featured";
import HeroSection from "@/Components/HeroSection";
import WhyChooseUs from "@/Components/WhyChooseUs";
import CardMoving from "@/Components/CardMoving";
import UpcommingWebinars from "@/Components/UpcommingWebinars";
import Instructor from "@/Components/Instructor";
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <Featured />
      <WhyChooseUs />
      <CardMoving />
      <UpcommingWebinars />
      <Instructor/>
      <Footer />
    </main>
  );
}
