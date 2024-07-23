import { Hashnode } from "@/lib/hashnode";
import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Image from "next/image";

export default async function SingleArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const { data, errors } = await Hashnode.getArticleBySlug(params.slug);
  // Override react-markdown elements to add class names
  const P = ({ children }: any) => (
    <p className="text-neutral-300 leading-7 font-light mb-4">{children}</p>
  );

  const Li = ({ children }: any) => (
    <li className="text-white list-disc ml-4">{children}</li>
  );

  const H1 = ({ children }: any) => (
    <h1 className="text-4xl font-bold text-white mb-8">{children}</h1>
  );

  const H2 = ({ children }: any) => (
    <h2 className="text-3xl font-semibold text-white mb-6">{children}</h2>
  );

  const H3 = ({ children }: any) => (
    <h3 className="text-2xl font-medium text-white mb-4">{children}</h3>
  );

  const H4 = ({ children }: any) => (
    <h4 className="text-xl font-normal text-white mb-4">{children}</h4>
  );

  const Hr = () => <hr className="md-post-hr" />;

  return (
    <section className="container px-36">
      <div className="flex flex-col gap-4 mb-10">
        <Image
          src={data.publication.post.coverImage.url}
          width={1000}
          height={1000}
          className="object-cover w-full h-full"
          alt="cover-image"
        />
        <h1 className="text-5xl font-bold">{data.publication.post.title}</h1>
        <p className="text-neutral-400 text-xl font-medium italic pt-4">
          {data.publication.post.subtitle}
        </p>
      </div>
      <Markdown
        remarkPlugins={[remarkGfm]} // Allows us to have embedded HTML tags in our markdown
        components={{
          p: P,
          li: Li,
          h1: H1,
          h2: H2,
          h3: H3,
          h4: H4,
          hr: Hr,
          code({ node, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              <SyntaxHighlighter
                className="!mb-10"
                language={match[1]}
                PreTag="div"
                showLineNumbers={true}
                // @ts-ignore
                style={vscDarkPlus}
                {...props}>
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code
                className="md-post-code bg-neutral-200/10 rounded p-1"
                {...props}>
                {children}
              </code>
            );
          },
        }}>
        {data.publication.post.content.markdown}
      </Markdown>
    </section>
  );
}
