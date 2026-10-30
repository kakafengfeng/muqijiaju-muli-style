import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/sites/muqi/SiteHeader";
import { SiteFooter } from "@/components/sites/muqi/SiteFooter";
import { BackToTop } from "@/components/sites/muqi/BackToTop";
import { Reveal } from "@/components/sites/muqi/Reveal";
import { DEPARTMENTS } from "@/lib/content";
import { asset } from "@/lib/site";

export const metadata: Metadata = {
  title: "团队架构 — 木栖家居",
};

/** 团队页：部门索引（分部门，点击进入部门成员页） */
export default function TeamIndexPage() {
  return (
    <main className="w-full overflow-x-clip bg-cream">
      <SiteHeader solid />

      <section className="w-full bg-cream">
        <div className="mx-auto max-w-7xl px-5 pb-24 pt-32 lg:px-10 lg:pt-40">
          <Reveal className="text-center">
            <p className="mb-6 text-xs font-light tracking-[0.5em] text-brass">TEAM</p>
            <h1 className="text-4xl font-light tracking-[0.2em] text-charcoal lg:text-5xl">
              团队架构
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-[15px] font-light leading-relaxed text-ink/60">
              高效协作，专业分工。每一位成员都是木栖大家庭不可或缺的一部分。
            </p>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {DEPARTMENTS.map((d, i) => (
              <Reveal key={d.id} delay={(i % 4) * 100}>
                <a
                  href={asset(`/team/${d.id}`)}
                  className="group flex h-full flex-col bg-parchment/60 p-8 transition-colors duration-500 hover:bg-walnut"
                >
                  <p className="text-[11px] font-light tracking-[0.4em] text-brass">
                    {d.nameEn}
                  </p>
                  <h2 className="mt-4 text-2xl font-light tracking-[0.2em] text-charcoal transition-colors duration-500 group-hover:text-cream">
                    {d.name}
                  </h2>
                  <div className="mt-6 flex-1 space-y-2 text-sm font-light text-ink/60 transition-colors duration-500 group-hover:text-cream/70">
                    <p>负责人：{d.manager}</p>
                    <p>成员 {d.members.length} 人</p>
                  </div>
                  <div className="mt-8 flex items-center justify-between">
                    <span className="text-xs font-light tracking-[0.3em] text-brass">
                      查看成员
                    </span>
                    <ArrowUpRight
                      size={20}
                      strokeWidth={1.5}
                      className="text-brass transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </a>
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
