import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/sites/muqi/SiteHeader";
import { SiteFooter } from "@/components/sites/muqi/SiteFooter";
import { BackToTop } from "@/components/sites/muqi/BackToTop";
import { Reveal } from "@/components/sites/muqi/Reveal";
import { PRODUCTS } from "@/lib/content";
import { asset } from "@/lib/site";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id);
  return {
    title: product ? `${product.name} — 木栖家居` : "产品 — 木栖家居",
  };
}

/** 产品详情页：60vh 大图 Hero + 展开文案 */
export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id);
  if (!product) notFound();

  return (
    <main className="w-full overflow-x-clip bg-cream">
      <SiteHeader solid />

      {/* 60vh 图片 Hero */}
      <section className="relative flex h-[60vh] min-h-[420px] w-full items-end overflow-hidden">
        <img
          src={asset(product.image)}
          alt={product.name}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/25 to-charcoal/30" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-14 lg:px-10">
          <p className="mb-4 text-xs font-light tracking-[0.5em] text-cream/80">
            {product.categoryEn}
          </p>
          <h1 className="text-4xl font-light tracking-[0.2em] text-cream lg:text-6xl">
            {product.name}
          </h1>
          <p className="mt-4 max-w-xl text-base font-light text-cream/85 lg:text-lg">
            {product.description}
          </p>
        </div>
      </section>

      {/* 展开文案 */}
      <section className="w-full bg-cream">
        <div className="mx-auto max-w-3xl px-5 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <p className="mb-6 text-xs font-light tracking-[0.5em] text-brass">
              {product.no} / {product.categoryEn}
            </p>
          </Reveal>
          {product.body.map((para, i) => (
            <Reveal key={i} delay={i * 100}>
              <p className="mb-8 text-lg font-light leading-loose text-ink/80">{para}</p>
            </Reveal>
          ))}
          <Reveal>
            <div className="mt-12 flex flex-wrap items-center gap-6 border-t border-charcoal/10 pt-10">
              <a
                href={asset("/#contact")}
                className="bg-charcoal px-10 py-3.5 text-sm tracking-[0.3em] text-cream transition-colors hover:bg-walnut"
              >
                咨询此产品
              </a>
              <a
                href={asset("/#products")}
                className="inline-flex items-center gap-2 text-sm tracking-[0.3em] text-ink/70 transition-colors hover:text-charcoal"
              >
                <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
                返回产品
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
