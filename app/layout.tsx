import type { Metadata } from "next";
import { JetBrains_Mono, Merriweather } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import AosProvider from "@/components/aos-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Noise from "@/components/noise";
import Image from "next/image";

const jetBrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jet-brains",
  display: "swap",
});
const merriweather = Merriweather({
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-merriweather",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Meet Makwana",
  description:
    "Frontend developer who loves creating simple and minimalistic designs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(jetBrains.className, merriweather.variable)}>
        <Noise />
        <AosProvider>
          <div className="relative antialiased text-base bg-neutral-950">
            <Header />
            <Image
              src="/aurora2.png"
              alt="lights"
              width={1000}
              height={1000}
              className="w-full max-w-6xl h-fit pointer-events-none select-none object-contain absolute -top-10 opacity-40 lef-1/2 translate-x-1/3"
            />
            {children}
            <Footer />
          </div>
        </AosProvider>
      </body>
    </html>
  );
}
