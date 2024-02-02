import Header from "@/components/header";
import StackCard from "@/components/stack-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { stackData } from "./stack-data";
import HeroAnimation from "@/components/hero-animation";
import HeroSvg from "@/components/icons/hero";

export const metadata = {
  title: "Meet Makwana",
  description: "Meet Makwana is a full-stack developer.",
};

export default function Home() {
  return (
    <>
      <Header />
      <div className="space-y-24 md:pb-40">
        <section className="mt-32" id="hii">
          <div className="flex justify-between">
            <div className="flex flex-col justify-start items-center md:items-start text-center md:text-left">
              <h1 className="text-green-500 font-bold md:text-9xl text-5xl">
                FULL-STACK DEVELOPER
              </h1>
              <p className="max-w-2xl mt-4 text-lg">
                I am an experienced Web Developer with a passion for creating
                user interfaces that are simple to use. I will create extremely
                high quality user interfaces in a short amount of time.
              </p>
              <div className="flex flex-col md:flex-row mt-6">
                <Button size="lg" variant="secondary" className="mb-4">
                  Jump to projects
                </Button>
                <Button size="lg" variant="link" asChild>
                  <Link href="mailto:makwnameet7301@gmail.com">
                    makwnameet7301@gmail.com
                  </Link>
                </Button>
              </div>
            </div>
            <div className="absolute -right-[300px]">
              <HeroSvg className="-scale-x-100" />
            </div>
          </div>
        </section>

        <section
          className="max-w-lg mx-auto md:mx-0 space-y-6 text-center md:text-left"
          id="about"
        >
          <h1 className="text-4xl">About</h1>
          <p>
            I&apos;m Meet Makwana, a frontend developer currently located in
            Seattle. I bring a diverse skill set to the table, specializing in
            crafting exceptional user experiences through my expertise in
            interaction, visual, brand, and motion design. With a passion for
            overcoming challenges that require creativity and innovation, I
            thrive in the dynamic world of design.
          </p>
        </section>

        <section className="space-y-6">
          <h1 className="text-4xl text-center md:text-left">Tech Stack</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {stackData.map((tech, index: number) => (
              <StackCard item={tech} key={index} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
