import { Reveal } from "./Reveal";
import { asset } from "@/lib/site";

interface Project {
  name: string;
  image: string;
}

const PROJECTS: Project[] = [
  { name: "金地", image: "/images/projects/jindi-1.jpg" },
  { name: "金茂", image: "/images/projects/jinmao-1.jpg" },
  { name: "世茂", image: "/images/projects/shimao-1.jpg" },
  { name: "万科", image: "/images/projects/vanke-1.png" },
  { name: "中骏", image: "/images/projects/zhongjun-1.png" },
  { name: "紫薇", image: "/images/projects/ziwei-1.jpg" },
];

/** 项目案例：六宫格，hover 放大 */
export function Projects() {
  return (
    <section id="projects" className="w-full bg-cream">
      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32">
        <Reveal>
          <p className="mb-6 text-xs font-light tracking-[0.5em] text-brass">PROJECTS</p>
          <h2 className="text-4xl font-light tracking-[0.2em] text-charcoal lg:text-5xl">项目案例</h2>
          <p className="mt-4 text-[15px] font-light text-ink/60">与一线房企的深度合作，见证品质落地。</p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 120}>
              <figure className="group relative aspect-[4/3] cursor-pointer overflow-hidden bg-parchment">
                <img
                  src={asset(p.image)}
                  alt={`${p.name}项目`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-95" />
                <figcaption className="absolute bottom-0 left-0 flex w-full items-center justify-between p-6">
                  <span className="text-xl font-light tracking-[0.25em] text-cream">{p.name}</span>
                  <span className="text-xs font-light tracking-[0.3em] text-cream/75">精选案例</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
