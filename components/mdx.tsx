import React from "react";
import Link from "next/link";
import Image, { ImageProps } from "next/image";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import { highlight } from "sugar-high";
import { TweetComponent } from "./tweet";
import { CaptionComponent } from "./caption";
import { YouTubeComponent } from "./youtube";
import { ImageGrid } from "./image-grid";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import "katex/dist/katex.min.css";

interface CustomLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

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

interface CustomMDXProps extends MDXRemoteProps {
  components?: Record<string, React.ComponentType<any>>;
}

function CustomLink(props: CustomLinkProps) {
  let href = props.href;
  if (href.startsWith("/")) {
    return <Link {...props}>{props.children}</Link>;
  }
  if (href.startsWith("#")) {
    return <a {...props} />;
  }
  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

function RoundedImage(props: ImageProps) {
  return <Image className="rounded-lg" {...props} alt={props.alt} />;
}

interface CodeProps extends React.HTMLAttributes<HTMLElement> {
  children: string;
}

function Code({ children, ...props }: CodeProps) {
  let codeHTML = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
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
  StaticTweet: TweetComponent,
  Caption: CaptionComponent,
  YouTube: YouTubeComponent,
  code: Code,
  Table,
  del: Strikethrough,
  Callout,
};

export function CustomMDX(props: CustomMDXProps) {
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
