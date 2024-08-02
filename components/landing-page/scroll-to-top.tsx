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
        "fixed bottom-0 right-10 z-10 flex hidden size-14 items-center justify-center rounded-full bg-neutral-500/10 transition hover:bg-neutral-500/20 sm:block",
        showButton ? "-translate-y-10" : "translate-y-14",
      )}
    >
      <ArrowBigUp className="size-6 fill-blue-500 stroke-blue-500" />
    </button>
  );
};

export default ScrollToTop;
