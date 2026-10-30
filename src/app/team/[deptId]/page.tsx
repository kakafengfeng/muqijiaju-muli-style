import type { Metadata } from "next";
import { ArrowLeft, Star } from "lucide-react";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/sites/muqi/SiteFooter";
import { BackToTop } from "@/components/sites/muqi/BackToTop";
import { Reveal } from "@/components/sites/muqi/Reveal";
import { DeptMembers } from "@/components/sites/muqi/DeptMembers";
import { MANAGER_PHOTOS } from "@/lib/team";
import { DEPARTMENTS } from "@/lib/content";
import { asset } from "@/lib/site";

export function generateStaticParams() {
  return DEPARTMENTS.map((d) => ({ deptId: d.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ deptId: string }>;
}): Promise<Metadata> {
  const { deptId } = await params;
  const dept = DEPARTMENTS.find((d) => d.id === deptId);
  return {
    title: dept ? `${dept.name} — 团队 — 木栖家居` : "团队 — 木栖家居",
  };
}

/** 部门详情页 · 深色高级风：部门头（负责人 3:4 照片 + 徽章）+ 成员网格 + 点击弹窗 */
export default async function DeptPage({
  params,
}: {
  params: Promise<{ deptId: string }>;
}) {
  const { deptId } = await params;
  const dept = DEPARTMENTS.find((d) => d.id === deptId);
  if (!dept) notFound();

  const managerPhoto = MANAGER_PHOTOS[dept.manager];

  return (
    <main className="w-full overflow-x-clip bg-coal">
      <section className="w-full bg-coal">
        <div className="mx-auto max-w-7xl px-5 pb-24 pt-28 lg:px-10 lg:pt-36">
          <Reveal>
            <a
              href={asset("/team")}
              className="inline-flex items-center gap-2 text-xs font-light tracking-[0.3em] text-cream/50 transition-colors hover:text-cream"
            >
              <ArrowLeft size={15} strokeWidth={1.5} />
              返回团队架构
            </a>
          </Reveal>

          {/* 部门头 */}
          <Reveal className="mt-10 flex flex-col items-start gap-8 lg:flex-row lg:items-center">
            {managerPhoto ? (
              <img
                src={asset(managerPhoto)}
                alt={dept.manager}
                className="aspect-[3/4] w-44 shrink-0 bg-walnut-deep object-cover object-top ring-1 ring-brass/60 lg:w-52"
              />
            ) : (
              <div
                aria-hidden
                className="flex aspect-[3/4] w-44 shrink-0 items-center justify-center bg-walnut-deep ring-1 ring-brass/60 lg:w-52"
              >
                <span className="text-6xl font-light text-cream">
                  {dept.manager.charAt(0)}
                </span>
              </div>
            )}
            <div>
              <p className="text-xs font-light tracking-[0.5em] text-brass">
                {dept.nameEn}
              </p>
              <h1 className="mt-3 text-4xl font-light tracking-[0.2em] text-cream lg:text-5xl">
                {dept.name}
              </h1>
              <p className="mt-4 flex items-center gap-3 text-[15px] font-light text-cream/60">
                <span className="inline-flex items-center gap-1.5 bg-brass/15 px-2.5 py-1 text-xs font-light tracking-[0.2em] text-brass ring-1 ring-brass/40">
                  <Star size={12} fill="currentColor" />
                  负责人：{dept.manager}
                </span>
                <span className="text-cream/40">成员 {dept.members.length} 人</span>
              </p>
            </div>
          </Reveal>

          {/* 成员网格 + 弹窗（深色） */}
          <DeptMembers members={dept.members} />
        </div>
      </section>

      <SiteFooter />
      <BackToTop />
    </main>
  );
}
