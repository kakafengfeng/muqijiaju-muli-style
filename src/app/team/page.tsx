import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { SiteFooter } from "@/components/sites/muqi/SiteFooter";
import { BackToTop } from "@/components/sites/muqi/BackToTop";
import { Reveal } from "@/components/sites/muqi/Reveal";
import { TeamBoard } from "@/components/sites/muqi/TeamBoard";
import { DEPARTMENTS } from "@/lib/content";
import { MANAGER_PHOTOS } from "@/lib/team";
import { asset } from "@/lib/site";

export const metadata: Metadata = {
  title: "团队架构 — 木栖家居",
};

/** 团队架构页：原站 TeamPage 设计逻辑（单页展示 8 个部门 + 成员详情浮层） */
export default function TeamPage() {
  return (
    <main className="w-full overflow-x-clip bg-cream">
      {/* 顶部细导航条：返回首页 / 团队架构 */}
      <div className="fixed inset-x-0 top-0 z-40 border-b border-brass/20 bg-cream/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10">
          <a
            href={asset("/")}
            className="inline-flex items-center gap-2 text-xs font-light tracking-[0.3em] text-charcoal transition-opacity hover:opacity-60"
          >
            <ArrowLeft size={15} strokeWidth={1.5} />
            返回首页
          </a>
          <span className="text-[11px] font-light tracking-[0.4em] text-ink/50">
            TEAM · 团队架构
          </span>
        </div>
      </div>

      <section className="w-full bg-cream">
        <div className="mx-auto max-w-7xl px-5 pb-24 pt-32 lg:px-10 lg:pt-40">
          {/* 页头：大标题 + 介绍，加载时淡入上浮 */}
          <Reveal className="text-center">
            <p className="mb-6 text-xs font-light tracking-[0.5em] text-brass">
              TEAM
            </p>
            <h1 className="text-4xl font-light tracking-[0.2em] text-charcoal lg:text-5xl">
              团队架构
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-[15px] font-light leading-relaxed text-ink/60">
              高效协作，专业分工。每一位成员都是木栖大家庭不可或缺的一部分。
            </p>
          </Reveal>

          <TeamBoard departments={DEPARTMENTS} managerPhotos={MANAGER_PHOTOS} />
        </div>
      </section>

      <SiteFooter />
      <BackToTop />
    </main>
  );
}
