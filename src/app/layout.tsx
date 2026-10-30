import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "木栖家居 MUQI HOME — 只为美好关系",
  description:
    "木栖家居科技（上海）有限公司，致力于提供高品质的居家生活与智能定制解决方案。在细微之处重塑空间秩序，以极简美学演绎东方哲学。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="min-h-full bg-cream font-sans font-light text-ink">
        {children}
      </body>
    </html>
  );
}
