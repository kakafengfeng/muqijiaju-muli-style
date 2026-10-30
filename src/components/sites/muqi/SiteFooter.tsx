import { asset } from "@/lib/site";

const NAV = [
  { label: "关于", href: "#about" },
  { label: "产品", href: "#products" },
  { label: "项目", href: "#projects" },
  { label: "新闻", href: "#news" },
  { label: "联系", href: "#contact" },
];

/** 页脚 */
export function SiteFooter() {
  return (
    <footer className="w-full bg-charcoal text-cream/75">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-10 lg:py-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <img src={asset("/images/logo.svg")} alt="木栖家居" className="h-10 w-auto" />
              <span className="text-lg font-light tracking-[0.2em] text-cream">木栖家居</span>
            </div>
            <p className="mt-6 text-sm font-light leading-relaxed">
              木栖家居科技（上海）有限公司
              <br />
              Muqi Home Technology (Shanghai) Co., Ltd.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-10 gap-y-4">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-light tracking-[0.25em] transition-colors hover:text-cream"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="text-sm font-light leading-loose">
            <p>上海市徐汇区宜山路家饰佳4033展位</p>
            <p>021-54242017 · 15801948991</p>
            <p>980763379@qq.com</p>
          </div>
        </div>

        <div className="mt-14 border-t border-cream/15 pt-8 text-xs font-light tracking-wider text-cream/45">
          © 2025 Muqi Home Technology. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
