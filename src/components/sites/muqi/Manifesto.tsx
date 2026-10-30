import { Reveal } from "./Reveal";

/** 品牌宣言：深胡桃木色底，木栖原创文案 */
export function Manifesto() {
  return (
    <section className="w-full bg-walnut-deep">
      <Reveal className="mx-auto max-w-4xl px-5 py-28 text-center lg:py-40">
        <p className="mb-8 text-xs font-light tracking-[0.5em] text-sand/60">MANIFESTO</p>
        <p className="text-2xl font-light leading-[2] tracking-[0.12em] text-cream lg:text-[2rem]">
          木，是时间的容器；
          <br />
          家，是心灵的栖所。
        </p>
        <p className="mx-auto mt-8 max-w-2xl text-base font-light leading-loose text-cream/70">
          我们以东方美学为魂，以现代工艺为骨，
          为每一个家庭，定制可以栖居的温度。
        </p>
      </Reveal>
    </section>
  );
}
