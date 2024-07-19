import Header from "@/components/header";
import HeroSection from "@/components/landing-page/hero-section";
import AosProvider from "@/components/aos-provider";
import AboutSection from "@/components/landing-page/about-section";
import ArticleSection from "@/components/landing-page/article-section";
import TechnologySection from "@/components/landing-page/technology-section";

export const metadata = {
  title: "Meet Makwana",
  description:
    "Frontend developer who loves creating simple and minimalistic designs.",
};

export default async function Home() {
  return (
    <AosProvider>
      <div className="container">
        <Header />
        <HeroSection />
        <div className="space-y-44 mb-20">
          <AboutSection />
          <TechnologySection />
          <ArticleSection />
        </div>
      </div>
    </AosProvider>
  );
}
