/** 站点级常量：构建期注入的子路径，供客户端拼接静态资源 URL。 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** 拼接 public 下静态资源路径，兼容 GitHub Pages 子路径部署。 */
export function asset(path: string): string {
  return `${BASE_PATH}${path}`;
}
