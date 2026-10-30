"use client";

import { useCallback, useEffect, useState } from "react";
import { Star, X } from "lucide-react";
import { Reveal } from "@/components/sites/muqi/Reveal";
import { MemberVisual, Monogram } from "@/components/sites/muqi/DeptMembers";
import type { Department, DeptMember } from "@/lib/content";
import { asset } from "@/lib/site";
import { cn } from "@/lib/utils";

interface ActiveMember {
  dept: Department;
  member: DeptMember;
}

/**
 * 团队架构看板：8 个部门卡片全部展示（原站 TeamPage 设计逻辑，
 * 奶油色/深胡桃木/黄铜视觉语言）。
 * - 部门卡片：中英文名、负责人（照片+姓名+星标徽章）、成员照片网格
 * - 成员照片 hover 放大 1.05；姓名下细分割线 hover 变宽
 * - 点击成员 → 全屏浮层（淡入+缩放），ESC/背景/X 关闭，锁 body 滚动
 */
export function TeamBoard({
  departments,
  managerPhotos,
}: {
  departments: Department[];
  managerPhotos: Record<string, string>;
}) {
  const [active, setActive] = useState<ActiveMember | null>(null);
  const [shown, setShown] = useState(false);

  const openMember = useCallback((dept: Department, member: DeptMember) => {
    setActive({ dept, member });
    requestAnimationFrame(() =>
      requestAnimationFrame(() => setShown(true)),
    );
  }, []);

  const close = useCallback(() => {
    setShown(false);
    window.setTimeout(() => setActive(null), 300);
  }, []);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close ]);

  return (
    <>
      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {departments.map((dept, di) => {
          const managerPhoto = managerPhotos[dept.manager];
          return (
            <Reveal key={dept.id} delay={di * 100}>
              <article className="flex h-full flex-col bg-parchment/70 p-6 ring-1 ring-ink/10 transition-shadow duration-500 hover:shadow-xl lg:p-7">
                <p className="text-[11px] font-light tracking-[0.4em] text-brass">
                  {dept.nameEn}
                </p>
                <h2 className="mt-2 text-2xl font-light tracking-[0.2em] text-charcoal">
                  {dept.name}
                </h2>

                {/* 负责人：照片 + 姓名 + 星标徽章 */}
                <div className="mt-5 flex items-center gap-4 border-y border-ink/10 py-4">
                  {managerPhoto ? (
                    <img
                      src={asset(managerPhoto)}
                      alt={dept.manager}
                      loading="lazy"
                      className="aspect-[3/4] w-16 shrink-0 object-cover object-top ring-1 ring-brass/50"
                    />
                  ) : (
                    <div
                      aria-hidden
                      className="flex aspect-[3/4] w-16 shrink-0 items-center justify-center bg-walnut ring-1 ring-brass/50"
                    >
                      <span className="text-2xl font-light text-cream">
                        {dept.manager.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div>
                    <p className="text-lg font-light tracking-[0.2em] text-charcoal">
                      {dept.manager}
                    </p>
                    <span className="mt-2 inline-flex items-center gap-1.5 bg-brass/10 px-2.5 py-1 text-xs font-light tracking-[0.2em] text-brass ring-1 ring-brass/30">
                      <Star size={12} className="text-brass" fill="currentColor" />
                      负责人
                    </span>
                  </div>
                </div>

                {/* 成员网格 */}
                <p className="mt-5 text-[11px] font-light tracking-[0.4em] text-ink/50">
                  成员（{dept.members.length}）
                </p>
                <div className="mt-4 grid flex-1 grid-cols-3 gap-4">
                  {dept.members.map((m) => (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => openMember(dept, m)}
                      className="group text-center"
                      aria-label={`查看${m.name}的介绍`}
                    >
                      <div className="relative aspect-[3/4] w-full overflow-hidden bg-walnut/10">
                        <div className="h-full w-full transition-transform duration-700 group-hover:scale-105">
                          <MemberVisual member={m} />
                        </div>
                      </div>
                      <h3 className="mt-3 text-sm font-light tracking-[0.2em] text-charcoal">
                        {m.name}
                      </h3>
                      <div className="mx-auto mt-2 h-px w-8 bg-brass/70 transition-all duration-500 group-hover:w-12 group-hover:bg-brass" />
                      <p className="mt-2 text-[10px] font-light tracking-[0.2em] text-ink/55">
                        {m.role}
                      </p>
                    </button>
                  ))}
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      {/* 成员详情浮层 */}
      {active && (
        <div
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={`${active.member.name}的介绍`}
          className={cn(
            "fixed inset-0 z-[90] flex items-center justify-center bg-charcoal/85 p-5 backdrop-blur-sm transition-opacity duration-300",
            shown ? "opacity-100" : "opacity-0",
          )}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={cn(
              "relative w-full max-w-lg overflow-hidden bg-cream shadow-2xl transition-all duration-300",
              shown ? "scale-100 opacity-100" : "scale-90 opacity-0",
            )}
          >
            <button
              type="button"
              onClick={close}
              aria-label="关闭成员详情"
              className="absolute right-4 top-4 z-10 text-cream/70 transition-colors hover:text-cream"
            >
              <X size={28} strokeWidth={1.5} />
            </button>
            <div className="relative aspect-[3/4] max-h-[52vh] w-full overflow-hidden bg-walnut/10">
              {active.member.image ? (
                <img
                  src={asset(active.member.image)}
                  alt={active.member.name}
                  className="h-full w-full object-cover object-top"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-walnut">
                  <Monogram name={active.member.name} size="xl" />
                </div>
              )}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-left">
                <h3 className="text-3xl font-light tracking-[0.15em] text-cream">
                  {active.member.name}
                </h3>
                <p className="mt-2 text-xs font-light tracking-[0.35em] text-brass">
                  {active.member.role} · {active.dept.name}
                </p>
              </div>
            </div>
            <div className="p-7 text-center">
              <p className="text-[15px] font-light italic leading-relaxed text-ink/75">
                “{active.member.intro || "暂无个人介绍"}”
              </p>
              <p className="mt-5 text-[11px] font-light tracking-[0.25em] text-ink/40">
                员工编号：{active.member.id}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
