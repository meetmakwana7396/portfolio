import Link from "next/link";
import { Button } from "../ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faHashnode,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const HeroSection = () => {
  return (
    <section className="flex" id="hii">
      <div className="w-full">
        <div className="text-left flex space-x-8">
          <div className="text-2xl flex justify-center size-16 items-center rounded-full bg-black">
            <div>
              <i>m</i>
              <sup className="ml-1">2</sup>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold">Meet Makwana</h1>
            <p className="text-neutral-500">Experienced Frontend Engineer</p>
          </div>
        </div>
        <p className="text-lg max-w-3xl font-light mt-10 mx-auto w-auto text-left">
          I'm learning about shipping great products, becoming a better
          developer, and growing a career in tech.
        </p>
        <div className="flex justify-start items-center gap-3 mt-10 font-semibold">
          <Link
            href="https://github.com/meetmakwana7396?tab=repositories"
            className="blue-underline">
            <span>Github</span>
          </Link>
          {" / "}
          <Link href="https://x.com/meetmakwna" className="blue-underline">
            <span>Twitter</span>
          </Link>
          {" / "}
          <Link
            href="https://www.linkedin.com/in/meet-makwana-33458921b/"
            className="blue-underline">
            <span>Linkedin</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
