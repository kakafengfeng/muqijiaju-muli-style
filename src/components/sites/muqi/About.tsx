import { Reveal } from "./Reveal";

/** 关于：两段品牌文案，大留白排版（#about 锚点） */
export function About() {
  return (
    <section id="about" className="w-full bg-cream">
      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-36">
        <Reveal>
          <p className="mb-6 text-xs font-light tracking-[0.5em] text-brass">ABOUT US</p>
          <h2 className="text-4xl font-light tracking-[0.2em] text-charcoal lg:text-5xl">重构生活美学</h2>
        </Reveal>
        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-20">
          <Reveal delay={100}>
            <p className="text-lg font-light leading-loose text-ink/85">
              木栖家居科技（上海）有限公司，致力于提供高品质的居家生活与智能定制解决方案。我们坚信，家是人与世界连接的起点，也是内心回归的终点。
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-lg font-light leading-loose text-ink/85">
              我们汇聚全球顶尖设计力量，融合精湛工艺与现代科技，为您打造独一无二的居住体验。每一处细节，皆是对完美的极致追求。
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
