"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Navlink from "./navlink";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import MyAvatar from "./layout/my-avatar";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Header = () => {
  const pathname = usePathname();

  const [showHeader, setShowHeader] = useState(pathname === "/" ? false : true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        "shadow-black-900 container sticky sm:top-10 top-6 z-10 flex h-16 sm:w-full w-[95%] items-center justify-between rounded-xl bg-white/5 px-4 shadow-lg backdrop-blur-lg transition",
        pathname === "/"
          ? showHeader
            ? "translate-y-0"
            : "-translate-y-40"
          : "visible",
      )}
    >
      <Link href="/" className="text-2xl">
        <MyAvatar className="size-10 ring-0" />
      </Link>
      <div className="hidden sm:block">
        <ul className="flex">
          <li>
            <Navlink href="/articles">Articles</Navlink>
          </li>
          <li>
            <Navlink
              href="https://github.com/meetmakwana7396?tab=repositories"
              target="_blank"
            >
              Github
            </Navlink>
          </li>
          <li>
            <Navlink href="https://x.com/meetmakwna" target="_blank">
              Twitter
            </Navlink>
          </li>
          <li>
            <Navlink
              href="https://www.linkedin.com/in/meet-makwana-33458921b/"
              target="_blank"
            >
              Linkedin
            </Navlink>
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
    </div>
  );
};

export default Header;
