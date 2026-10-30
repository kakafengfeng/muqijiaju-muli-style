import { SiteHeader } from "@/components/sites/muqi/SiteHeader";
import { Hero } from "@/components/sites/muqi/Hero";
import { CraftBanner } from "@/components/sites/muqi/CraftBanner";
import { About } from "@/components/sites/muqi/About";
import { ProductCarousel } from "@/components/sites/muqi/ProductCarousel";
import { Manifesto } from "@/components/sites/muqi/Manifesto";
import { Projects } from "@/components/sites/muqi/Projects";
import { News } from "@/components/sites/muqi/News";
import { Contact } from "@/components/sites/muqi/Contact";
import { SiteFooter } from "@/components/sites/muqi/SiteFooter";
import { BackToTop } from "@/components/sites/muqi/BackToTop";

/** 木栖家居 MUQI HOME 官网首页（单页，锚点导航） */
export default function Home() {
  return (
    <main className="w-full overflow-x-clip bg-cream">
      <SiteHeader />
      <Hero />
      <CraftBanner />
      <About />
      <ProductCarousel />
      <Manifesto />
      <Projects />
      <News />
      <Contact />
      <SiteFooter />
      <BackToTop />
    </main>
  );
}
