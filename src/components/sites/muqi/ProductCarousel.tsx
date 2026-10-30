"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { asset } from "@/lib/site";

interface Product {
  no: string;
  categoryEn: string;
  name: string;
  description: string;
  image: string;
}

const PRODUCTS: Product[] = [
  {
    no: "01",
    categoryEn: "Door System",
    name: "隐形门系统",
    description: "无界设计，空间延伸的艺术。",
    image: "/images/img-2.jpg",
  },
  {
    no: "02",
    categoryEn: "Wood Veneer Wall",
    name: "木饰面护墙",
    description: "温润触感，定义空间基调。",
    image: "/images/img-3.jpg",
  },
  {
    no: "03",
    categoryEn: "Bespoke Storage",
    name: "高定收纳",
    description: "理性秩序与感性美学的平衡。",
    image: "/images/img-4.jpg",
  },
  {
    no: "04",
    categoryEn: "Smart Control System",
    name: "智能中控",
    description: "科技隐于无形，服务生活。",
    image: "/images/img-5.jpg",
  },
];

/** 产品区：横向可拖拽卡片 + 细进度条 */
export function ProductCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const drag = useRef({ active: false, startX: 0, startScroll: 0 });

  const updateProgress = () => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  };

  useEffect(() => {
    updateProgress();
    window.addEventListener("resize", updateProgress);
    return () => window.removeEventListener("resize", updateProgress);
  }, []);

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const w = card ? card.offsetWidth + 24 : el.clientWidth * 0.7;
    el.scrollBy({ left: dir * w, behavior: "smooth" });
  };

  return (
    <section id="products" className="w-full bg-parchment/60">
      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32">
        <Reveal className="flex items-end justify-between">
          <div>
            <p className="mb-6 text-xs font-light tracking-[0.5em] text-brass">PRODUCTS</p>
            <h2 className="text-4xl font-light tracking-[0.2em] text-charcoal lg:text-5xl">产品体系</h2>
          </div>
          <div className="hidden gap-3 md:flex">
            <button
              type="button"
              aria-label="向左滚动"
              onClick={() => scrollByCard(-1)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-charcoal/25 text-charcoal transition-colors hover:bg-charcoal hover:text-cream"
            >
              <ArrowLeft className="h-5 w-5" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              aria-label="向右滚动"
              onClick={() => scrollByCard(1)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-charcoal/25 text-charcoal transition-colors hover:bg-charcoal hover:text-cream"
            >
              <ArrowRight className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
        </Reveal>
      </div>

      <div className="pb-10">
        <div
          ref={trackRef}
          onScroll={updateProgress}
          onPointerDown={(e) => {
            const el = trackRef.current;
            if (!el) return;
            drag.current = { active: true, startX: e.clientX, startScroll: el.scrollLeft };
          }}
          onPointerMove={(e) => {
            const el = trackRef.current;
            if (!el || !drag.current.active) return;
            el.scrollLeft = drag.current.startScroll - (e.clientX - drag.current.startX);
          }}
          onPointerUp={() => (drag.current.active = false)}
          onPointerLeave={() => (drag.current.active = false)}
          className="no-scrollbar flex cursor-grab snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-6 active:cursor-grabbing lg:px-[max(2.5rem,calc((100vw-80rem)/2+2.5rem))]"
        >
          {PRODUCTS.map((p) => (
            <article
              key={p.no}
              data-card
              className="group w-[78vw] shrink-0 snap-start overflow-hidden bg-cream sm:w-[46vw] lg:w-[30vw]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={asset(p.image)}
                  alt={p.name}
                  draggable={false}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <div className="flex items-baseline justify-between">
                  <p className="text-xs font-light tracking-[0.35em] text-brass">{p.categoryEn}</p>
                  <p className="text-sm font-light text-ink/40">{p.no}</p>
                </div>
                <h3 className="mt-3 text-2xl font-light tracking-[0.15em] text-charcoal">{p.name}</h3>
                <p className="mt-2 text-[15px] font-light text-ink/70">{p.description}</p>
              </div>
            </article>
          ))}
        </div>

        {/* 细进度条 */}
        <div className="mx-auto mt-2 max-w-7xl px-5 lg:px-10">
          <div className="h-[3px] w-full bg-sand/60">
            <div
              className="h-full w-[8%] bg-walnut transition-[margin] duration-150"
              style={{ marginLeft: `${progress * 92}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
