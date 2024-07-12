import { MoveRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faHashnode,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const HeroSection = () => {
  return (
    <section className="flex h-[calc(100vh-64px)]" id="hii">
      <div className="w-full flex justify-center">
        <div className="max-w-[500px] text-center h-fit mt-24">
          <div
            className="space-y-4"
            data-aos="fade-down"
            data-aos-duration="500">
            <p className="font-normal text-xl text-neutral-500">
              Hii, my name is
            </p>
            <h1 className="sm:text-7xl text-6xl tracking-wider font-bold">
              MEET
              <br />
              MAKWANA
            </h1>
            <p className="font-light text-lg">
              I&apos;m frontend developer who loves creating{" "}
              <span className="text-yellow-300">simple</span> and{" "}
              <span className="text-green-300">minimalistic</span> designs
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <Button className="flex gap-2 group font-semibold">
                Contact Me
                <MoveRight                
                  className="group-hover:translate-x-1 ease-in transition stroke-black"
                />
              </Button>
              <Button variant={"outline"} asChild>
                <Link href="https://techmeet.hashnode.dev/" target="_blank">
                  Read my articles
                </Link>
              </Button>
            </div>
            <div className="flex justify-center items-center text-center gap-6 pt-6">
              <Button size={"icon"} variant={"ghost"} asChild>
                <Link href="https://github.com/meetmakwana7396?tab=repositories">
                  <FontAwesomeIcon icon={faGithub} className="size-6" />
                </Link>
              </Button>
              <Button size={"icon"} variant={"ghost"} asChild>
                <Link href="https://x.com/meetmakwna">
                  <FontAwesomeIcon icon={faXTwitter} className="size-6" />
                </Link>
              </Button>
              <Button size={"icon"} variant={"ghost"} asChild>
                <Link href="https://www.linkedin.com/in/meet-makwana-33458921b/">
                  <FontAwesomeIcon icon={faLinkedinIn} className="size-6" />
                </Link>
              </Button>
              <Button size={"icon"} variant={"ghost"} asChild>
                <Link href="https://techmeet.hashnode.dev/">
                  <FontAwesomeIcon icon={faHashnode} className="size-6" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
