import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { readdirSync } from "node:fs";
import { join } from "node:path";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/sites/muqi/SiteHeader";
import { SiteFooter } from "@/components/sites/muqi/SiteFooter";
import { BackToTop } from "@/components/sites/muqi/BackToTop";
import { Reveal } from "@/components/sites/muqi/Reveal";
import { PROJECTS } from "@/lib/content";
import { asset } from "@/lib/site";

const IMG_EXT = new Set([".jpg", ".jpeg", ".png", ".webp"]);

/** 构建期读取该项目文件夹内全部图片（封面优先 *-cover，其次 *-1） */
function projectImages(slug: string): string[] {
  const dir = join(process.cwd(), "public", "images", "projects");
  const files = readdirSync(dir).filter(
    (f) => f.startsWith(`${slug}-`) && IMG_EXT.has(f.slice(f.lastIndexOf(".")).toLowerCase()),
  );
  files.sort((a, b) => {
    const rank = (f: string) => (f.includes("-cover") ? -1 : 0);
    return rank(a) - rank(b) || a.localeCompare(b);
  });
  return files.map((f) => `/images/projects/${f}`);
}

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  return {
    title: project ? `${project.name} — 项目案例 — 木栖家居` : "项目案例 — 木栖家居",
  };
}

/** 项目案例详情页：封面大图 Hero + 全图图集 */
export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();
  const images = projectImages(slug);
  const [cover, ...rest] = images;

  return (
    <main className="w-full overflow-x-clip bg-cream">
      <SiteHeader solid />

      {/* 60vh 封面 Hero */}
      <section className="relative flex h-[60vh] min-h-[420px] w-full items-end overflow-hidden">
        {cover && (
          <img
            src={asset(cover)}
            alt={`${project.name}项目`}
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/25 to-charcoal/30" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-14 lg:px-10">
          <p className="mb-4 text-xs font-light tracking-[0.5em] text-cream/80">PROJECTS</p>
          <h1 className="text-4xl font-light tracking-[0.2em] text-cream lg:text-6xl">
            {project.name}
          </h1>
          <p className="mt-4 text-sm font-light tracking-[0.35em] text-cream/80">
            {project.tag}
          </p>
        </div>
      </section>

      {/* 图集 */}
      <section className="w-full bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <p className="mb-4 text-[15px] font-light leading-relaxed text-ink/60">
              与一线房企的深度合作，见证品质落地。以下为{project.name}项目实拍图集。
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {rest.map((src, i) => (
              <Reveal key={src} delay={(i % 2) * 120}>
                <figure className="group overflow-hidden bg-parchment">
                  <img
                    src={asset(src)}
                    alt={`${project.name}项目实拍 ${i + 2}`}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-14 border-t border-charcoal/10 pt-10">
              <a
                href={asset("/#projects")}
                className="inline-flex items-center gap-2 text-sm tracking-[0.3em] text-ink/70 transition-colors hover:text-charcoal"
              >
                <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
                返回项目案例
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
      <BackToTop />
    </main>
  );
}
