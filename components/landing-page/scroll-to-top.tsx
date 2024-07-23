"use client";

import { cn } from "@/lib/utils";
import { ArrowBigUp } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed size-14 right-10 transition bg-neutral-800 border-blue-500 border z-10 bottom-0 rounded-full flex justify-center items-center",
        showButton ? "-translate-y-10" : "translate-y-14"
      )}>
      <ArrowBigUp className="size-6 fill-blue-500 stroke-blue-500" />
    </button>
  );
};

export default ScrollToTop;
