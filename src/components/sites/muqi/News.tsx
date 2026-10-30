import { Reveal } from "./Reveal";
import { asset } from "@/lib/site";

interface NewsItem {
  title: string;
  date: string;
  category: string;
  image: string;
}

const NEWS: NewsItem[] = [
  {
    title: "木栖家居新品发布会：重塑边界",
    date: "2025-11",
    category: "Events",
    image: "/images/projects/jindi-2.jpg",
  },
  {
    title: "荣获2024年度国际设计金奖",
    date: "2024-10",
    category: "Awards",
    image: "/images/projects/jinmao-2.jpg",
  },
  {
    title: "关于木材可持续发展的企业承诺",
    date: "2024-09",
    category: "Sustainability",
    image: "/images/projects/shimao-2.jpg",
  },
];

/** 新闻：三栏卡片，hover 放大 */
export function News() {
  return (
    <section id="news" className="w-full bg-parchment/60">
      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32">
        <Reveal>
          <p className="mb-6 text-xs font-light tracking-[0.5em] text-brass">NEWS</p>
          <h2 className="text-4xl font-light tracking-[0.2em] text-charcoal lg:text-5xl">新闻动态</h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {NEWS.map((n, i) => (
            <Reveal key={n.title} delay={i * 120}>
              <article className="group cursor-pointer bg-cream">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={asset(n.image)}
                    alt={n.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs font-light tracking-[0.25em]">
                    <span className="text-brass">{n.category}</span>
                    <span className="text-ink/45">{n.date}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-light leading-relaxed tracking-wide text-charcoal transition-colors group-hover:text-walnut">
                    {n.title}
                  </h3>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
