import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/sites/muqi/SiteHeader";
import { SiteFooter } from "@/components/sites/muqi/SiteFooter";
import { BackToTop } from "@/components/sites/muqi/BackToTop";
import { Reveal } from "@/components/sites/muqi/Reveal";
import { DeptMembers, Monogram } from "@/components/sites/muqi/DeptMembers";
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

/** 部门成员页：部门头 + 全部成员网格（点击弹出详情） */
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
    <main className="w-full overflow-x-clip bg-cream">
      <SiteHeader solid />

      <section className="w-full bg-cream">
        <div className="mx-auto max-w-7xl px-5 pb-24 pt-32 lg:px-10 lg:pt-40">
          <Reveal>
            <a
              href={asset("/team")}
              className="inline-flex items-center gap-2 text-xs font-light tracking-[0.3em] text-ink/50 transition-colors hover:text-charcoal"
            >
              <ArrowLeft size={15} strokeWidth={1.5} />
              返回团队架构
            </a>
          </Reveal>

          <Reveal className="mt-10 flex flex-col items-start gap-8 lg:flex-row lg:items-center">
            {managerPhoto ? (
              <img
                src={asset(managerPhoto)}
                alt={dept.manager}
                className="h-28 w-28 rounded-full object-cover object-top ring-1 ring-brass/60"
              />
            ) : (
              <Monogram name={dept.manager} />
            )}
            <div>
              <p className="text-xs font-light tracking-[0.5em] text-brass">
                {dept.nameEn}
              </p>
              <h1 className="mt-3 text-4xl font-light tracking-[0.2em] text-charcoal lg:text-5xl">
                {dept.name}
              </h1>
              <p className="mt-4 text-[15px] font-light text-ink/60">
                负责人：{dept.manager}
                <span className="mx-3 text-brass">·</span>
                成员 {dept.members.length} 人
              </p>
            </div>
          </Reveal>

          <DeptMembers members={dept.members} />
        </div>
      </section>

      <SiteFooter />
      <BackToTop />
    </main>
  );
}
