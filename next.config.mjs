/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

  images: {
    unoptimized: true,
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "cdn.hashnode.com",
    //   },
    // ],
  },
};

// Merge MDX config with Next.js config
export default nextConfig;
