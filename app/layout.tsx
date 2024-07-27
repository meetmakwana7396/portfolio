import type { Metadata } from "next";
import { JetBrains_Mono, Merriweather, Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import AosProvider from "@/components/aos-provider";
import Header from "@/components/header";

const jetBrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jet-brains",
});
const merriweather = Merriweather({
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-merriweather",
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
        <AosProvider>
          <div className="relative antialiased text-base sm:px-10">
            <Header />
            {children}
          </div>
        </AosProvider>
      </body>
    </html>
  );
}
