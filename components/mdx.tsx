import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { highlight } from "sugar-high";
import { TweetComponent } from "./tweet";
import { CaptionComponent } from "./caption";
import { YouTubeComponent } from "./youtube";
import { ImageGrid } from "./image-grid";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import "katex/dist/katex.min.css";

interface TableProps {
  data: {
    headers: string[];
    rows: (string | number | React.ReactNode)[][];
  };
}

interface CalloutProps {
  emoji: React.ReactNode;
  children: React.ReactNode;
}

function CustomLink(props: any) {
  let href = props.href;
  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }
  if (href.startsWith("#")) {
    return <a {...props} />;
  }
  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

function RoundedImage(props: any) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

function Code({ children, ...props }: any) {
  let codeHTML = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

const InlineCode = ({ children }: any) => (
  <code
    style={{
      backgroundColor: "#eee",
      padding: "10px",
      fontFamily: "monospace",
    }}
  >
    {children}
  </code>
);

function BlockQuote(props: React.HTMLAttributes<HTMLElement>) {
  return (
    <blockquote
      className="rounded-xl border-l-teal-500 bg-teal-900/50 p-1 px-6 text-lg"
      {...props}
    />
  );
}

function Table({ data }: TableProps) {
  let headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ));
  let rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));
  return (
    <table>
      <thead>
        <tr className="text-left">{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function Strikethrough(props: React.HTMLAttributes<HTMLElement>) {
  return <del {...props} />;
}

function Callout(props: CalloutProps) {
  return (
    <div className="mb-8 flex items-center rounded bg-[#F7F7F7] p-1 px-4 py-3 text-sm text-neutral-900 dark:bg-[#181818] dark:text-neutral-100">
      <div className="mr-4 flex w-4 items-center">{props.emoji}</div>
      <div className="callout w-full leading-relaxed">{props.children}</div>
    </div>
  );
}

function slugify(str: string): string {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/&/g, "-and-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}

interface HeadingProps {
  children: string;
}

function createHeading(level: number) {
  const Heading = ({ children }: HeadingProps) => {
    let slug = slugify(children);
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        }),
      ],
      children,
    );
  };
  Heading.displayName = `Heading${level}`;
  return Heading;
}

const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  ImageGrid,
  a: CustomLink,
  blockquote: BlockQuote,
  StaticTweet: TweetComponent,
  Caption: CaptionComponent,
  YouTube: YouTubeComponent,
  code: Code,
  Table,
  del: Strikethrough,
  Callout,
};

export function CustomMDX(props: any) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
      }}
    />
  );
}
