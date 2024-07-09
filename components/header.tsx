import Link from "next/link";
import React from "react";
import Navlink from "./navlink";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const Header = () => {
  return (
    <div className="flex items-center justify-between sm:h-24 h-16 sticky top-0">
      <Link href="/" className="text-2xl">
        <i>m</i>
        <sup className="ml-1">2</sup>
      </Link>
      <div className="hidden sm:block">
        <ul className="flex gap-8">
          <li>
            <Navlink href="#hii">Hii</Navlink>
          </li>
          <li>
            <Navlink href="#about">About</Navlink>
          </li>
          {/* <li>Blog</li> */}
          <li>
            <Navlink
              href="https://www.dropbox.com/scl/fi/ucrowekfxacwidx43ctg1/Meet-Makwana-Resume.docx?rlkey=kmam2hzjast7ee565kt2m56sj&dl=0"
              target="_blank"
            >
              Resume
            </Navlink>
          </li>
          <li>Get in touch</li>
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
    </div>
  );
};

export default Header;
