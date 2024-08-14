import type { Metadata } from "next";
import { JetBrains_Mono, Merriweather, Nunito } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Noise from "@/components/noise";
import Image from "next/image";
import ScrollToTop from "@/components/landing-page/scroll-to-top";

const jetBrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jet-brains",
  display: "swap",
});
const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
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
      <body className={cn(jetBrains.className, merriweather.variable, nunito.variable)}>
        <Noise />
        <div className="relative bg-neutral-950 text-base antialiased">
          <Header />
          <ScrollToTop />
          <div className="pointer-events-none absolute left-1/2 top-0 w-full -translate-x-1/2 transform sm:max-w-6xl">
            <Image
              src="/aurora2.png"
              alt="lights"
              width={1000}
              height={1000}
              className="h-fit w-full object-contain opacity-40"
            />
          </div>
          <div className="mt-16 sm:mt-24">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
