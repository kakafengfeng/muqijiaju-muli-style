"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Reveal } from "@/components/sites/muqi/Reveal";
import type { DeptMember } from "@/lib/content";
import { asset } from "@/lib/site";
import { cn } from "@/lib/utils";

/** 无照片成员的首字徽章（浅色适配：浅灰底 + 深字） */
export function Monogram({ name, size = "lg" }: { name: string; size?: "lg" | "xl" }) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-full bg-stone-200",
        size === "xl" ? "h-40 w-40" : "h-24 w-24",
      )}
      aria-hidden
    >
      <span
        className={cn(
          "font-medium text-stone-600",
          size === "xl" ? "text-6xl" : "text-4xl",
        )}
      >
        {name.slice(0, 1)}
      </span>
    </div>
  );
}

export function MemberVisual({ member, size = "lg" }: { member: DeptMember; size?: "lg" | "xl" }) {
  if (member.image) {
    return (
      <img
        src={asset(member.image)}
        alt={member.name}
        loading="lazy"
        className={cn(
          "object-cover object-top",
          size === "xl" ? "h-64 w-52" : "h-full w-full",
        )}
      />
    );
  }
  return (
    <div className="flex h-full w-full items-center justify-center bg-stone-100">
      <Monogram name={member.name} size={size} />
    </div>
  );
}

/** 部门成员网格 + 点击弹出详情浮层（原站浅色风格） */
export function DeptMembers({ members }: { members: DeptMember[] }) {
  const [active, setActive] = useState<DeptMember | null>(null);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3">
        {members.map((m, i) => (
          <Reveal key={m.id} delay={(i % 3) * 90}>
            <button
              type="button"
              onClick={() => setActive(m)}
              className="group block w-full text-center"
              aria-label={`查看${m.name}的介绍`}
            >
              <div className="aspect-[3/4] w-full overflow-hidden bg-stone-100">
                <div className="h-full w-full transition-transform duration-500 group-hover:scale-105">
                  <MemberVisual member={m} />
                </div>
              </div>
              <h3 className="mt-4 text-[17px] font-bold text-stone-900">
                {m.name}
              </h3>
              <div className="mx-auto mt-2 h-px w-8 bg-stone-300" />
              <p className="mt-2 text-xs tracking-[0.2em] text-stone-400">
                {m.role}
              </p>
            </button>
          </Reveal>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/70 p-2 backdrop-blur-sm sm:p-6"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${active.name}的介绍`}
        >
          <div
            className="relative max-h-[94vh] w-full max-w-2xl overflow-y-auto bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              className="absolute right-4 top-4 z-10 text-white/80 transition-colors hover:text-white"
              aria-label="关闭"
            >
              <X size={26} strokeWidth={1.5} />
            </button>
            {/* 照片区：纵向大图 + 底部渐隐压字 */}
            <div className="relative">
              {active.image ? (
                <img
                  src={asset(active.image)}
                  alt={active.name}
                  className="aspect-[3/4] max-h-[68vh] w-full object-cover object-top"
                />
              ) : (
                <div className="flex aspect-[3/4] max-h-[68vh] w-full items-center justify-center bg-stone-200">
                  <Monogram name={active.name} size="xl" />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-left sm:p-8">
                <h3 className="text-3xl font-bold text-white sm:text-4xl">{active.name}</h3>
                <p className="mt-1 text-sm font-medium text-amber-400 sm:text-base">
                  {active.role}
                </p>
              </div>
            </div>
            {/* 白色介绍区 */}
            <div className="bg-white px-6 pb-8 pt-6 text-center sm:px-10">
              <p className="text-xs font-medium tracking-[0.35em] text-stone-400">
                INTRODUCTION
              </p>
              <p className="mt-4 text-[15px] italic leading-relaxed text-stone-600">
                “{active.intro || "暂无个人介绍"}”
              </p>
              <div className="mx-auto mt-6 h-px w-full bg-stone-200" />
              <p className="mt-4 text-xs text-stone-400">
                Employee ID: {active.id}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
