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
      className="hover:underline decoration-4 decoration-green-500"
      target={target}
    >
      {children}
    </Link>
  );
};

export default Navlink;
