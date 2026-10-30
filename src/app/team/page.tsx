import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/sites/muqi/SiteHeader";
import { SiteFooter } from "@/components/sites/muqi/SiteFooter";
import { BackToTop } from "@/components/sites/muqi/BackToTop";
import { Reveal } from "@/components/sites/muqi/Reveal";
import { DEPARTMENTS } from "@/lib/content";
import { MANAGER_PHOTOS } from "@/lib/team";
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
                  className="group flex h-full flex-col bg-parchment/60 transition-colors duration-500 hover:bg-walnut"
                >
                  {/* 负责人照片：3:4 主视觉 */}
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-walnut/10">
                    {MANAGER_PHOTOS[d.manager] ? (
                      <img
                        src={asset(MANAGER_PHOTOS[d.manager])}
                        alt={`${d.manager}（${d.name}负责人）`}
                        loading="lazy"
                        className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-walnut">
                        <span className="flex h-32 w-32 items-center justify-center rounded-full text-7xl font-light text-cream ring-1 ring-brass/60">
                          {d.manager.slice(0, 1)}
                        </span>
                      </div>
                    )}
                    {/* 负责人标签压在照片底部 */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/85 via-charcoal/40 to-transparent px-5 pb-4 pt-12">
                      <p className="text-[11px] font-light tracking-[0.35em] text-cream/80">
                        负责人
                      </p>
                      <p className="mt-1 text-xl font-light tracking-[0.25em] text-cream">
                        {d.manager}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-[11px] font-light tracking-[0.4em] text-brass">
                      {d.nameEn}
                    </p>
                    <h2 className="mt-3 text-2xl font-light tracking-[0.2em] text-charcoal transition-colors duration-500 group-hover:text-cream">
                      {d.name}
                    </h2>
                    <p className="mt-2 text-sm font-light text-ink/60 transition-colors duration-500 group-hover:text-cream/70">
                      成员 {d.members.length} 人
                    </p>
                    <div className="mt-6 flex flex-1 items-end">
                      <div className="flex w-full items-center justify-between border-t border-ink/10 pt-4 transition-colors duration-500 group-hover:border-cream/20">
                        <span className="text-xs font-light tracking-[0.3em] text-brass">
                          查看成员
                        </span>
                        <ArrowUpRight
                          size={20}
                          strokeWidth={1.5}
                          className="text-brass transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                      </div>
                    </div>
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
