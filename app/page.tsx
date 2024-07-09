import Header from "@/components/header";
import StackCard from "@/components/stack-card";
import Link from "next/link";
import { stackData } from "@/app/data/stack-data";
import Image from "next/image";
import { socialData } from "./data/social-data";
import HeroSection from "@/components/landing-page/hero-section";
import AosProvider from "@/components/aos-provider";

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
        <div className="">
          <HeroSection />

          <section className="space-y-6 text-center" id="about">
            <h1 className="text-4xl font-thin text-center">About</h1>
            <p className="text-lg max-w-3xl font-light mx-auto text-center">
              Hii there! I&apos;m Meet. I am front-end developer from India.
            </p>
          </section>

          <section className="space-y-6 lg:pt-[150px]">
            <h1 className="text-4xl">Tech Stack</h1>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {stackData.map((tech, index: number) => (
                <StackCard item={tech} key={index} />
              ))}
            </div>
          </section>

          {/* Get in touch section  */}
          <footer className="h-36 flex flex-col gap-4 justify-start items-center">
            <h2 className="sm:text-xl text-center">
              Stay in touch and connect for exclusive content
            </h2>
            <div className="flex gap-x-4 items-center">
              {socialData.map((social) => (
                <Link
                  href={social.url}
                  target="_blank"
                  className="hover:bg-green-500/10"
                  key={social.url}>
                  <Image
                    src={social.imageURL}
                    height={28}
                    width={28}
                    className="hover:scale-110 transition"
                    alt={social.url}
                  />
                </Link>
              ))}
            </div>
          </footer>
        </div>
      </div>
    </AosProvider>
  );
}
