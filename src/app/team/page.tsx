import type { Metadata } from "next";
import { SiteHeader } from "@/components/sites/muqi/SiteHeader";
import { SiteFooter } from "@/components/sites/muqi/SiteFooter";
import { BackToTop } from "@/components/sites/muqi/BackToTop";
import { Reveal } from "@/components/sites/muqi/Reveal";
import { TEAM } from "@/lib/content";
import { asset } from "@/lib/site";

export const metadata: Metadata = {
  title: "核心团队 — 木栖家居",
};

/** 团队页：核心团队成员（本地实拍照片） */
export default function TeamPage() {
  return (
    <main className="w-full overflow-x-clip bg-cream">
      <SiteHeader solid />

      <section className="w-full bg-cream">
        <div className="mx-auto max-w-7xl px-5 pb-24 pt-32 lg:px-10 lg:pt-40">
          <Reveal className="text-center">
            <p className="mb-6 text-xs font-light tracking-[0.5em] text-brass">TEAM</p>
            <h1 className="text-4xl font-light tracking-[0.2em] text-charcoal lg:text-5xl">
              核心团队
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-[15px] font-light leading-relaxed text-ink/60">
              高效协作，专业分工。每一位成员都是木栖大家庭不可或缺的一部分。
            </p>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((m, i) => (
              <Reveal key={m.name} delay={(i % 3) * 120}>
                <article className="group bg-parchment/60">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={asset(m.image)}
                      alt={m.name}
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-7 text-center">
                    <h2 className="text-xl font-light tracking-[0.2em] text-charcoal">
                      {m.name}
                    </h2>
                    <div className="mx-auto mt-3 h-[1px] w-8 bg-brass transition-all duration-500 group-hover:w-14" />
                    <p className="mt-3 text-xs font-light tracking-[0.3em] text-brass">
                      {m.role}
                    </p>
                    <p className="mt-4 text-[15px] font-light leading-relaxed text-ink/70">
                      {m.intro}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
      <BackToTop />
    </main>
  );
}
