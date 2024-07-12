import Header from "@/components/header";
import StackCard from "@/components/stack-card";
import Link from "next/link";
import { stackData } from "@/app/data/stack-data";
import Image from "next/image";
import { socialData } from "./data/social-data";
import HeroSection from "@/components/landing-page/hero-section";
import AosProvider from "@/components/aos-provider";
import AboutSection from "@/components/landing-page/about-section";

export const metadata = {
  title: "Meet Makwana",
  description: "Meet Makwana is a full-stack developer.",
};

const gallery = [
  "nature-1.jpg",
  "nature-2.jpg",
  "nature-3.jpg",
  "nature-4.jpg",
  "nature-5.jpg",
  "nature-6.jpg",
];

export default function Home() {
  return (
    <AosProvider>
      <div className="container">
        <Header />
        <HeroSection />
        <AboutSection />
      </div>
    </AosProvider>
  );
}
