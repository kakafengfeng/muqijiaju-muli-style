"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Reveal } from "@/components/sites/muqi/Reveal";
import type { DeptMember } from "@/lib/content";
import { asset } from "@/lib/site";
import { cn } from "@/lib/utils";

/** 无照片成员的首字徽章：深胡桃木底 + 米字 + 黄铜细环 */
export function Monogram({ name, size = "lg" }: { name: string; size?: "lg" | "xl" }) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-full bg-walnut ring-1 ring-brass/60",
        size === "xl" ? "h-40 w-40" : "h-24 w-24",
      )}
      aria-hidden
    >
      <span
        className={cn(
          "font-light text-cream",
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
    <div className="flex h-full w-full items-center justify-center bg-walnut/95">
      <Monogram name={member.name} size={size} />
    </div>
  );
}

/** 部门成员网格 + 点击弹出详情浮层 */
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
      <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 lg:gap-8">
        {members.map((m, i) => (
          <Reveal key={m.id} delay={(i % 4) * 90}>
            <button
              type="button"
              onClick={() => setActive(m)}
              className="group block w-full text-center"
              aria-label={`查看${m.name}的介绍`}
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-walnut-deep ring-1 ring-cream/10 transition-all duration-500 group-hover:ring-brass/50">
                <div className="h-full w-full transition-transform duration-700 group-hover:scale-105">
                  <MemberVisual member={m} />
                </div>
              </div>
              <h3 className="mt-5 text-lg font-light tracking-[0.25em] text-cream">
                {m.name}
              </h3>
              <div className="mx-auto mt-2 h-[1px] w-8 bg-brass transition-all duration-500 group-hover:w-14" />
              <p className="mt-2 text-xs font-light tracking-[0.3em] text-cream/55">
                {m.role}
              </p>
            </button>
          </Reveal>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-charcoal/80 p-5 backdrop-blur-sm"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${active.name}的介绍`}
        >
          <div
            className="relative w-full max-w-md bg-walnut-deep p-8 text-center shadow-2xl ring-1 ring-brass/30 lg:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              className="absolute right-4 top-4 text-cream/40 transition-colors hover:text-cream"
              aria-label="关闭"
            >
              <X size={22} strokeWidth={1.5} />
            </button>
            <div className="mx-auto flex h-52 items-center justify-center overflow-hidden">
              <MemberVisual member={active} size="xl" />
            </div>
            <h3 className="mt-6 text-2xl font-light tracking-[0.25em] text-cream">
              {active.name}
            </h3>
            <p className="mt-2 text-xs font-light tracking-[0.35em] text-brass">
              {active.role}
            </p>
            <div className="mx-auto mt-4 h-[1px] w-10 bg-brass/60" />
            <p className="mt-4 text-[15px] font-light leading-relaxed text-cream/70">
              {active.intro || "暂无个人介绍"}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
