import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { SiteFooter } from "@/components/sites/muqi/SiteFooter";
import { BackToTop } from "@/components/sites/muqi/BackToTop";
import { Reveal } from "@/components/sites/muqi/Reveal";
import { DEPARTMENTS } from "@/lib/content";
import { MANAGER_PHOTOS } from "@/lib/team";
import { asset } from "@/lib/site";

export const metadata: Metadata = {
  title: "团队架构 — 木栖家居",
};

/**
 * 团队架构页 · 浅色（与主页一致的奶油色系）
 * 奶油底 + 8 张部门大照片卡（4 列）：负责人照片全幅铺底，
 * 底部深色渐隐压字（DEPARTMENT 眉题 / 部门中文名 / 负责人姓名）。
 * 无实拍照片的负责人用深底首字徽章做成同样全幅卡。
 */
export default function TeamPage() {
  return (
    <main className="w-full overflow-x-clip bg-[#f7f2e8]">
      {/* 顶部细导航条（浅色，与部门页一致） */}
      <div className="fixed inset-x-0 top-0 z-40 border-b border-stone-900/10 bg-[#f7f2e8]/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10">
          <a
            href={asset("/")}
            className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.3em] text-stone-500 transition-colors hover:text-stone-900"
          >
            <ArrowLeft size={15} strokeWidth={1.5} />
            返回首页
          </a>
          <span className="text-[11px] font-light tracking-[0.4em] text-stone-400">
            TEAM · 团队架构
          </span>
        </div>
      </div>

      <section className="w-full bg-[#f7f2e8]">
        <div className="mx-auto max-w-7xl px-5 pb-28 pt-32 lg:px-10 lg:pt-40">
          {/* 页头 */}
          <Reveal className="text-center">
            <p className="mb-6 text-xs font-light tracking-[0.5em] text-brass">
              TEAM
            </p>
            <h1 className="text-4xl font-light tracking-[0.2em] text-stone-900 lg:text-5xl">
              团队架构
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-[15px] font-light leading-relaxed text-stone-500">
              高效协作，专业分工。每一位成员都是木栖大家庭不可或缺的一部分。
            </p>
          </Reveal>

          {/* 部门大照片卡：4 列 */}
          <div className="mt-16 grid grid-cols-2 gap-4 md:gap-5 lg:grid-cols-4">
            {DEPARTMENTS.map((dept, di) => {
              const managerPhoto = MANAGER_PHOTOS[dept.manager];
              return (
                <Reveal key={dept.id} delay={di * 100}>
                  <a
                    href={asset(`/team/${dept.id}`)}
                    aria-label={`进入${dept.name}，共${dept.members.length}名成员`}
                    className="group relative block aspect-[3/4] w-full overflow-hidden bg-walnut-deep ring-1 ring-stone-900/10 transition-all duration-500 hover:ring-1 hover:ring-brass/70"
                  >
                    {/* 负责人照片全幅铺底 / 无照片时深底首字徽章 */}
                    {managerPhoto ? (
                      <img
                        src={asset(managerPhoto)}
                        alt={dept.manager}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div
                        aria-hidden
                        className="absolute inset-0 flex items-center justify-center bg-walnut-deep transition-transform duration-700 group-hover:scale-105"
                      >
                        <span className="flex h-28 w-28 items-center justify-center rounded-full ring-1 ring-brass/60">
                          <span className="text-5xl font-light text-cream/90">
                            {dept.manager.charAt(0)}
                          </span>
                        </span>
                      </div>
                    )}
                    {/* 底部深色渐隐 */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                    {/* 压字 */}
                    <div className="absolute inset-x-0 bottom-0 p-5 text-left">
                      <p className="text-[10px] font-light tracking-[0.45em] text-cream/50">
                        DEPARTMENT
                      </p>
                      <h2 className="mt-2 text-2xl font-light tracking-[0.15em] text-cream">
                        {dept.name}
                      </h2>
                      <p className="mt-2 text-xs font-light tracking-[0.3em] text-cream/70">
                        {dept.manager}
                      </p>
                    </div>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <SiteFooter />
      <BackToTop />
    </main>
  );
}
