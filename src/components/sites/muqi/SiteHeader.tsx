"use client";

import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { asset } from "@/lib/site";

const NAV = [
  { label: "关于", href: "/#about" },
  { label: "产品", href: "/#products" },
  { label: "项目", href: "/#projects" },
  { label: "团队", href: "/team" },
  { label: "新闻", href: "/#news" },
  { label: "联系", href: "/#contact" },
];

/**
 * 页眉：桌面端 absolute 压在 Hero 上方；
 * 未滚动时透明（hover 整条变米色、文字反色），滚动后固定为米色底；
 * 移动端为白色固定顶栏 + 全屏滑入菜单。
 * solid=true 时（子页面）默认即为米色底深色字状态。
 */
export function SiteHeader({ solid = false }: { solid?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // 未滚动：透明底白字；hover / 滚动后 / 子页 solid：米色底深字
  const light = solid || scrolled || hovered;

  return (
    <>
      <header
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn(
          "left-0 top-0 z-50 w-full transition-all duration-300",
          // 移动端始终白色固定顶栏
          "fixed bg-white text-charcoal shadow-[0_1px_0_rgba(0,0,0,0.06)]",
          // 桌面端：首页未滚动时 absolute 透明压在 Hero 上；子页直接固定
          solid
            ? "lg:fixed"
            : "lg:absolute lg:bg-transparent lg:text-cream lg:shadow-none",
          light && "lg:fixed lg:bg-cream/95 lg:text-charcoal lg:shadow-[0_8px_30px_rgba(33,28,22,0.08)] lg:backdrop-blur",
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:h-20 lg:px-10">
          <a href={asset("/#top")} className="flex items-center gap-3">
            <img src={asset("/images/logo.svg")} alt="木栖家居" className="h-9 w-auto lg:h-10" />
            <span className="hidden text-lg font-medium tracking-[0.2em] sm:block">木栖家居</span>
          </a>

          <nav className="hidden items-center gap-10 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={asset(item.href)}
                className="text-[15px] font-light tracking-[0.25em] opacity-90 transition-opacity hover:opacity-100"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 text-sm tracking-wider opacity-90 lg:flex">
            <Phone className="h-4 w-4" strokeWidth={1.5} />
            <span>021-54242017</span>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "关闭菜单" : "打开菜单"}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center lg:hidden"
          >
            {menuOpen ? <X className="h-6 w-6" strokeWidth={1.5} /> : <Menu className="h-6 w-6" strokeWidth={1.5} />}
          </button>
        </div>
      </header>

      {/* 移动端全屏菜单 */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-cream transition-all duration-300 lg:hidden",
          menuOpen ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <nav
          className={cn(
            "flex h-full flex-col items-center justify-center gap-8 transition-transform duration-300",
            menuOpen ? "translate-x-0" : "translate-x-12",
          )}
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={asset(item.href)}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-light tracking-[0.3em] text-charcoal"
            >
              {item.label}
            </a>
          ))}
          <p className="mt-6 text-sm tracking-widest text-ink/60">021-54242017</p>
        </nav>
      </div>
    </>
  );
}
