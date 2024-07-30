import HeroSection from "@/components/landing-page/hero-section";
import ArticleSection from "@/components/landing-page/article-section";
import TechnologySection from "@/components/landing-page/technology-section";

export default async function Home() {
  return (
    <div className="container relative">
      <HeroSection />
      <div className="space-y-16">
        <TechnologySection />
        <ArticleSection />
      </div>
    </div>
  );
}
