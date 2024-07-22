import Link from "next/link";
import React from "react";
import Navlink from "./navlink";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import ScrollToTop from "./landing-page/scroll-to-top";

const Header = () => {
  return (
    <div className="flex container border w-full bg-zinc-900 z-10 items-center justify-between sm:h-24 h-16">
      <Link
        href="/"
        className="text-2xl"
        data-aos="fade-right"
        data-aos-duration="500">
        <i>m</i>
        <sup className="ml-1">2</sup>
      </Link>
      <div
        className="hidden sm:block"
        data-aos="fade-left"
        data-aos-duration="500">
        <ul className="flex gap-8">
          <li>
            <Navlink href="/#hii">Hii</Navlink>
          </li>
          <li>
            <Navlink href="/#about">About</Navlink>
          </li>
          <li>
            <Navlink href="/#technologies">Technologies</Navlink>
          </li>
          <li>
            <Navlink href="/#articles">Articles</Navlink>
          </li>
        </ul>
      </div>
      <div className="block sm:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant={"ghost"} size={"icon"}>
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent>Hello</SheetContent>
        </Sheet>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Header;
