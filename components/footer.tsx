import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-black/20">
      <div className="container py-8 border h-60">
        <div className="flex">
          <Link href="/" className="text-2xl">
            <i>m</i>
            <sup className="ml-1">2</sup>
          </Link>
        </div>
      </div>
      <div className="h-2 bg-blue-500"></div>
    </footer>
  );
};

export default Footer;
