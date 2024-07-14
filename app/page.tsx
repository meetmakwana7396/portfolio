import Header from "@/components/header";
import StackCard from "@/components/stack-card";
import Link from "next/link";
import { stackData } from "@/app/data/stack-data";
import Image from "next/image";
import { socialData } from "./data/social-data";
import HeroSection from "@/components/landing-page/hero-section";
import AosProvider from "@/components/aos-provider";
import AboutSection from "@/components/landing-page/about-section";
import SkillsSection from "@/components/landing-page/skills-section";

export const metadata = {
  title: "Meet Makwana",
  description:
    "Frontend developer who loves creating simple and minimalistic designs.",
};

export default function Home() {
  return (
    <AosProvider>
      <div className="container">
        <Header />
        <HeroSection />
        <div className="space-y-28 mb-20">
          <AboutSection />
          <SkillsSection />
        </div>
      </div>
    </AosProvider>
  );
}
