import { ArrowRight, MoveRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="flex h-[calc(100vh-64px)]" id="hii">
      <div className="w-full mt-32 flex justify-center">
        <div className="max-w-[500px] space-y-4 text-center">
          <p
            className="font-normal text-xl text-neutral-500"
            data-aos="fade-down"
            data-aos-duration="500">
            Hii, my name is
          </p>
          <h1
            className="sm:text-7xl text-6xl tracking-wider font-bold"
            data-aos="fade-down"
            data-aos-duration="500"
            data-aos-delay="100">
            MEET MAKWANA
          </h1>
          <p
            className="font-light text-lg"
            data-aos="fade-down"
            data-aos-duration="500"
            data-aos-delay="200">
            I am frontend developer who loves creating simple and minimalistic
            designs.
          </p>
          <div
            className="flex justify-center gap-4 pt-4"
            data-aos="fade-down"
            data-aos-duration="500"
            data-aos-delay="300">
            <Button className="flex gap-2 group">
              Contact Me <MoveRight color="black" className="group-hover:translate-x-1 transition" />{" "}
            </Button>
            <Button variant={"outline"} asChild>
              <Link href="https://techmeet.hashnode.dev/" target="_blank">
                Read my articles
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
