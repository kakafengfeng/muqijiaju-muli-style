import { Reveal } from "./Reveal";
import { asset } from "@/lib/site";

/** 工艺横幅：全宽大图 + 一句品牌主张 + 按钮跳到 #about */
export function CraftBanner() {
  return (
    <section className="relative flex min-h-[70vh] w-full items-center justify-center overflow-hidden">
      <img
        src={asset("/images/projects/jinmao-3.jpg")}
        alt="木栖家居工艺"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-charcoal/55" />
      <Reveal className="relative z-10 mx-auto max-w-4xl px-5 py-28 text-center lg:py-36">
        <p className="mb-6 text-xs font-light tracking-[0.5em] text-cream/70">CRAFTSMANSHIP</p>
        <p className="text-3xl font-light leading-[1.6] tracking-wide text-cream lg:text-4xl">
          家是人与世界连接的起点，
          <br />
          也是内心回归的终点。
        </p>
        <a
          href="#about"
          className="mt-10 inline-block border border-cream/70 px-12 py-3.5 text-sm tracking-[0.3em] text-cream transition-colors hover:bg-cream hover:text-charcoal"
        >
          走进木栖
        </a>
      </Reveal>
    </section>
  );
}
