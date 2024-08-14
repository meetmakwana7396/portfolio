import Link from "next/link";
import MyAvatar from "../layout/my-avatar";

const HeroSection = () => {
  return (
    <section className="flex px-4 sm:px-0" id="hii">
      <div className="w-full">
        <div className="flex space-x-8 text-left">
          <MyAvatar />
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold sm:text-4xl">Meet Makwana</h1>
            <p className="text-neutral-500">Experienced Frontend Engineer</p>
          </div>
        </div>
        <p className="mx-auto mt-10 w-auto max-w-3xl text-left text-lg font-light">
          I&apos;m learning about shipping great products, becoming a better
          developer, and growing a career in tech.
        </p>
        <div className="mt-10 flex items-center justify-start gap-3 font-semibold">
          <Link href="/articles" className="blue-underline">
            <span>Articles</span>
          </Link>
          {" / "}
          <Link
            href="https://github.com/meetmakwana7396"
            className="blue-underline"
          >
            <span>Github</span>
          </Link>
          {" / "}
          <Link href="https://x.com/meetmakwna" className="blue-underline">
            <span>Twitter</span>
          </Link>
          {" / "}
          <Link
            href="https://www.linkedin.com/in/meet-makwana-33458921b/"
            className="blue-underline"
          >
            <span>Linkedin</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
