import Link from "next/link";
import React from "react";
import Navlink from "./navlink";

const Header = () => {
  return (
    <div className="flex py-10 justify-between sticky top-0 bg-black">
      <Link href="/" className="text-2xl">
        <i>m</i>
        <sup className="ml-1">2</sup>
      </Link>
      <ul className="flex gap-8 ">
        <li>
          <Navlink href="#hii">Hii</Navlink>
        </li>
        <li>
          <Navlink href="#about">About</Navlink>
        </li>
        {/* <li>Blog</li> */}
        {/*  */}
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
  );
};

export default Header;
