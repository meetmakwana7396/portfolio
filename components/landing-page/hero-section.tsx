import Link from "next/link";
import MyAvatar from "../layout/my-avatar";

const HeroSection = () => {
  return (
    <section className="z-10 flex px-4 sm:px-0" id="hii">
      <div className="w-full space-y-8">
        {/* <MyAvatar /> */}
        <h1 className="text-3xl opacity-50 sm:text-4xl font-jetBrains">Hello, I am Meet.</h1>
        <p className="mx-auto w-auto max-w-3xl text-left text-lg sm:text-2xl">
          I am interdisciplinary developer with a passion for building scalable,
          performant, and secure software. I am currently working at{" "}
          <Link
            href={"https://appstonelab.com"}
            target="_blank"
            className="blue-underline"
          >
            AppStoneLab Technologies
          </Link>{" "}
          as a Frontend Lead.
        </p>
        <div className="flex items-center justify-start gap-3 text-lg font-semibold sm:text-xl">
          <Link href="/articles" className="blue-underline">
            Articles
          </Link>
          {" / "}
          <Link
            href="https://github.com/meetmakwana7396"
            className="blue-underline"
            target="_blank"
          >
            Github
          </Link>
          {" / "}
          <Link
            href="https://x.com/meetmakwna"
            className="blue-underline"
            target="_blank"
          >
            Twitter
          </Link>
          {" / "}
          <Link
            href="https://www.linkedin.com/in/meet-makwana-33458921b/"
            className="blue-underline"
            target="_blank"
          >
            Linkedin
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
