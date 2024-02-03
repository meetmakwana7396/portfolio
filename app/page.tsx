import Header from "@/components/header";
import StackCard from "@/components/stack-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { stackData } from "@/app/data/stack-data";
import HeroSvg from "@/components/icons/hero";
import Image from "next/image";
import { socialData } from "./data/social-data";
import { Mail } from "lucide-react";

export const metadata = {
  title: "Meet Makwana",
  description: "Meet Makwana is a full-stack developer.",
};

export default function Home() {
  return (
    <div className="container">
      <Header />
      <div className="space-y-32">
        <section className="mt-24 sm:mt-32" id="hii">
          <div className="flex justify-between">
            <div className="flex flex-col justify-start md:items-start text-left">
              <h1 className="text-green-500 font-bold md:text-6xl text-5xl mb-2 md:mb-4">
                FULL-STACK DEVELOPER
              </h1>
              <p className="max-w-2xl mt-2 md:mt-4 text-lg mb-4 md:mb-6">
                Experienced Full-Stack Developer passionate about creating
                user-friendly interfaces. Specializing in delivering
                high-quality UIs efficiently.
              </p>

              <div className="flex flex-col md:flex-row mt-4 md:mt-6">
                <Button
                  size="lg"
                  variant="default"
                  className="mb-2 md:mb-0 md:mr-4"
                >
                  Discover My Skills
                </Button>
                <Button size="lg" variant="outline" className="group" asChild>
                  <Link
                    className="flex gap-2 items-center"
                    href="mailto:makwnameet7301@gmail.com"
                  >
                    <Mail className="w-4 h-4 group-hover:stroke-black transition" />
                    Contact me
                  </Link>
                </Button>
              </div>
            </div>

            <div className="absolute z-0 lg:-right-[350px] xl:-right-[300px] 2xl:-right-[100px] hidden lg:block">
              <HeroSvg className="-scale-x-100" />
            </div>
          </div>
        </section>

        <section className="max-w-2xl space-y-6" id="about">
          <h1 className="text-4xl">About</h1>
          <p className="text-lg">
            Hii, I am Meet, an accomplished full-stack web developer boasting
            nearly 2 years of professional experience. My area of expertise
            primarily lies in front-end development, where I proficiently
            utilize technologies such as NextJS, React, JavaScript, and
            TypeScript. I take pride in meticulously crafting seamless user
            experiences and strategically leverage advanced tools, including AI
            applications like ChatGPT, to elevate the functionality of digital
            solutions. I am eager to engage in collaborative efforts to
            transform conceptual ideas into sophisticated and innovative digital
            solutions.
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
                key={social.url}
              >
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
  );
}
