import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 静态导出，便于日后 GitHub Pages 预览（项目站点子路径）
  output: "export",
  // 构建时通过 NEXT_BASE_PATH 注入子路径（如 /muqijiaju-muli-style），默认空字符串
  basePath: process.env.NEXT_BASE_PATH ?? process.env.NEXT_PUBLIC_BASE_PATH ?? "",
  // 把子路径同步给客户端的 asset()（NEXT_BASE_PATH 本身不会内联到客户端代码）
  env: {
    NEXT_PUBLIC_BASE_PATH:
      process.env.NEXT_PUBLIC_BASE_PATH ?? process.env.NEXT_BASE_PATH ?? "",
  },
};

export default nextConfig;
