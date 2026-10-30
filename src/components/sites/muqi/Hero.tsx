import { ChevronDown } from "lucide-react";
import { asset } from "@/lib/site";

/** Hero：100vh 全屏大图，大字排版 */
export function Hero() {
  return (
    <section id="top" className="relative flex h-svh min-h-[560px] w-full items-end overflow-hidden">
      <img
        src={asset("/images/hero.jpg")}
        alt="木栖家居"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/25 to-charcoal/30" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-24 lg:px-10 lg:pb-28">
        <p className="mb-6 text-xs font-light tracking-[0.5em] text-cream/80 lg:text-sm">
          MUQI HOME · MAKE BETTER CONNECTIONS
        </p>
        <h1 className="max-w-4xl text-5xl font-light leading-[1.15] tracking-wide text-cream lg:text-7xl">
          木栖家居
          <span className="mt-3 block text-2xl tracking-[0.35em] text-cream/90 lg:text-3xl">
            只为美好关系
          </span>
        </h1>
        <p className="mt-8 max-w-xl text-base font-light leading-relaxed text-cream/85 lg:text-lg">
          在细微之处重塑空间秩序，以极简美学演绎东方哲学。我们创造的不只是家具，而是恒久的生活温度。
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#about"
            className="bg-cream px-10 py-3.5 text-sm tracking-[0.3em] text-charcoal transition-colors hover:bg-parchment"
          >
            了解更多
          </a>
          <a
            href="#contact"
            className="border border-cream/60 px-10 py-3.5 text-sm tracking-[0.3em] text-cream transition-colors hover:bg-cream/10"
          >
            联系我们
          </a>
        </div>
      </div>

      <a
        href="#about"
        aria-label="向下滚动"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-cream/70 transition-colors hover:text-cream"
      >
        <ChevronDown className="h-7 w-7 animate-bounce" strokeWidth={1.25} />
      </a>
    </section>
  );
}
