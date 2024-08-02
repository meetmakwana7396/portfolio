import Link from "next/link";
import React, { HTMLProps } from "react";

interface INavlink {
  children: React.ReactNode;
  href: string;
  target?: string;
}

const Navlink = ({ children, href, target }: INavlink) => {
  return (
    <Link
      href={href}
      className="p-2 px-5 hover:bg-black/20 hover:drop-shadow-[100px] rounded-xl transition"
      target={target}
    >
      {children}
    </Link>
  );
};

export default Navlink;
