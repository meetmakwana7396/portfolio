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
      className="hover:underline py-2 underline-offset-4 decoration-4 decoration-blue-500"
      target={target}
    >
      {children}
    </Link>
  );
};

export default Navlink;
