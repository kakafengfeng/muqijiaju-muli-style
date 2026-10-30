import type { Metadata } from "next";
import { ArrowLeft, Star } from "lucide-react";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/sites/muqi/SiteFooter";
import { BackToTop } from "@/components/sites/muqi/BackToTop";
import { Reveal } from "@/components/sites/muqi/Reveal";
import { DeptMembers } from "@/components/sites/muqi/DeptMembers";
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

/** 部门详情页 · 原站浅色风格：奶油底 + 白色大卡片 + 成员网格 + 点击弹窗 */
export default async function DeptPage({
  params,
}: {
  params: Promise<{ deptId: string }>;
}) {
  const { deptId } = await params;
  const dept = DEPARTMENTS.find((d) => d.id === deptId);
  if (!dept) notFound();

  return (
    <main className="w-full overflow-x-clip bg-[#faf7f1]">
      <section className="w-full bg-[#faf7f1]">
        <div className="mx-auto max-w-6xl px-5 pb-20 pt-24 lg:px-10 lg:pt-28">
          <Reveal>
            <a
              href={asset("/team")}
              className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.3em] text-stone-500 transition-colors hover:text-stone-900"
            >
              <ArrowLeft size={15} strokeWidth={1.5} />
              返回团队架构
            </a>
          </Reveal>

          {/* 白色大卡片 */}
          <Reveal className="mt-8 bg-white px-6 py-10 shadow-[0_2px_16px_rgba(0,0,0,0.06)] sm:px-10 lg:px-14">
            <h1 className="text-3xl font-bold text-stone-900">{dept.name}</h1>
            <p className="mt-4">
              <span className="inline-flex items-center gap-1.5 bg-[#fff3e0] px-3 py-1.5 text-sm font-medium text-orange-500">
                <Star size={14} fill="currentColor" />
                Manager: {dept.manager}
              </span>
            </p>
            <div className="mt-6 h-px w-full bg-stone-200" />
            <p className="mt-6 text-xs font-medium tracking-[0.35em] text-stone-400">
              MEMBERS ({dept.members.length})
            </p>

            {/* 成员网格 + 弹窗（浅色） */}
            <DeptMembers members={dept.members} />
          </Reveal>
        </div>
      </section>

      <SiteFooter />
      <BackToTop />
    </main>
  );
}
