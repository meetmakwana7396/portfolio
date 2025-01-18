import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import { LinkProps } from "next/link";

// Common styles that can be reused
const textStyles = {
  light: {
    color: "#374151", // gray-700
    darkColor: "#D1D5DB", // dark:gray-300
  },
  dark: {
    color: "#111827", // gray-900
    darkColor: "#F9FAFB", // dark:gray-50
  },
};

// Extended types for Next.js components
type CustomLinkProps = LinkProps & {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
};

type CustomImageProps = Omit<ImageProps, "src"> & {
  src: string; // Make src required and string
  style?: React.CSSProperties;
  className?: string;
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ style = {}, ...props }) => (
      <h1
        style={{
          fontSize: "2.25rem",
          fontWeight: 700,
          letterSpacing: "-0.025em",
          color: textStyles.dark.color,
          marginTop: "2rem",
          marginBottom: "1.5rem",
          scrollMarginTop: "5rem",
          lineHeight: 1.2,
          ...style,
        }}
        {...props}
      />
    ),

    h2: ({ style = {}, ...props }) => (
      <h2
        style={{
          fontSize: "1.875rem",
          fontWeight: 600,
          letterSpacing: "-0.025em",
          color: textStyles.dark.color,
          marginTop: "2.5rem",
          marginBottom: "1rem",
          scrollMarginTop: "5rem",
          lineHeight: 1.3,
          ...style,
        }}
        {...props}
      />
    ),

    h3: ({ style = {}, ...props }) => (
      <h3
        style={{
          fontSize: "1.5rem",
          fontWeight: 600,
          letterSpacing: "-0.025em",
          color: textStyles.dark.color,
          marginTop: "2rem",
          marginBottom: "1rem",
          scrollMarginTop: "5rem",
          lineHeight: 1.4,
          ...style,
        }}
        {...props}
      />
    ),

    h4: ({ style = {}, ...props }) => (
      <h4
        style={{
          fontSize: "1.25rem",
          fontWeight: 600,
          letterSpacing: "-0.025em",
          color: textStyles.dark.color,
          marginTop: "1.5rem",
          marginBottom: "1rem",
          scrollMarginTop: "5rem",
          lineHeight: 1.5,
          ...style,
        }}
        {...props}
      />
    ),

    h5: ({ style = {}, ...props }) => (
      <h5
        style={{
          fontSize: "1.125rem",
          fontWeight: 600,
          letterSpacing: "-0.025em",
          color: textStyles.dark.color,
          marginTop: "1.5rem",
          marginBottom: "1rem",
          scrollMarginTop: "5rem",
          lineHeight: 1.5,
          ...style,
        }}
        {...props}
      />
    ),

    h6: ({ style = {}, ...props }) => (
      <h6
        style={{
          fontSize: "1rem",
          fontWeight: 600,
          letterSpacing: "-0.025em",
          color: textStyles.dark.color,
          marginTop: "1.5rem",
          marginBottom: "1rem",
          scrollMarginTop: "5rem",
          lineHeight: 1.5,
          ...style,
        }}
        {...props}
      />
    ),

    p: ({ style = {}, ...props }) => (
      <p
        style={{
          fontSize: "1rem",
          lineHeight: 1.75,
          color: textStyles.light.color,
          marginBottom: "1rem",
          ...style,
        }}
        {...props}
      />
    ),

    ul: ({ style = {}, ...props }) => (
      <ul
        style={{
          paddingLeft: "1.5rem",
          marginTop: "1.5rem",
          marginBottom: "1.5rem",
          listStyleType: "disc",
          color: textStyles.light.color,
          ...style,
        }}
        {...props}
      />
    ),

    ol: ({ style = {}, ...props }) => (
      <ol
        style={{
          paddingLeft: "1.5rem",
          marginTop: "1.5rem",
          marginBottom: "1.5rem",
          listStyleType: "decimal",
          color: textStyles.light.color,
          ...style,
        }}
        {...props}
      />
    ),

    li: ({ style = {}, ...props }) => (
      <li
        style={{
          marginTop: "0.5rem",
          ...style,
        }}
        {...props}
      />
    ),

    blockquote: ({ style = {}, ...props }) => (
      <blockquote
        style={{
          paddingLeft: "1.5rem",
          marginTop: "1.5rem",
          marginBottom: "1.5rem",
          borderLeft: "2px solid #E5E7EB",
          fontStyle: "italic",
          color: textStyles.light.color,
          ...style,
        }}
        {...props}
      />
    ),

    pre: ({ style = {}, ...props }) => (
      <pre
        style={{
          fontSize: "0.875rem",
          backgroundColor: "#1F2937",
          padding: "1rem",
          borderRadius: "0.5rem",
          overflow: "auto",
          marginTop: "1.5rem",
          marginBottom: "1rem",
          color: "#F9FAFB",
          ...style,
        }}
        {...props}
      />
    ),

    code: ({ style = {}, ...props }) => (
      <code
        style={{
          fontSize: "0.875rem",
          fontFamily: "monospace",
          backgroundColor: "#F3F4F6",
          padding: "0.25rem 0.375rem",
          borderRadius: "0.25rem",
          color: "#1F2937",
          ...style,
        }}
        {...props}
      />
    ),

    a: ({ style = {}, ...props }) => (
      <a
        style={{
          color: "#2563EB",
          textDecoration: "underline",
          textUnderlineOffset: "4px",
          fontWeight: 500,
          ...style,
        }}
        {...props}
      />
    ),

    hr: ({ style = {}, ...props }) => (
      <hr
        style={{
          marginTop: "2rem",
          marginBottom: "2rem",
          borderColor: "#E5E7EB",
          ...style,
        }}
        {...props}
      />
    ),

    strong: ({ style = {}, ...props }) => (
      <strong
        style={{
          fontWeight: 600,
          color: textStyles.dark.color,
          ...style,
        }}
        {...props}
      />
    ),

    // Next.js Image component
    img: ({ src = "", alt = "", style = {}, ...props }) => {
      // Handle external images vs local images
      const isExternal = src.startsWith("http") || src.startsWith("https");

      return (
        <div style={{ position: "relative", ...style }}>
          <Image
            width={800} // Default width, can be overridden via props
            height={400} // Default height, can be overridden via props
            style={{
              maxWidth: "100%",
              height: "auto",
              borderRadius: "0.5rem",
            }}
            {...(props as CustomImageProps)}
          />
        </div>
      );
    },

    ...components,
  };
}
