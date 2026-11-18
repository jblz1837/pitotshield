import type { NextConfig } from "next";

/**
 * Production custom domain uses root URLs; GitHub Pages preview uses /pitotshield.
 * NEXT_PUBLIC_BASE_PATH must be set at build time for a project Pages URL.
 */
const normalize = (value?: string) => {
  if (!value || value === "/") return undefined;
  return value.startsWith("/") ? value.replace(/\/$/, "") : `/${value.replace(/\/$/, "")}`;
};
const basePath = normalize(process.env.NEXT_PUBLIC_BASE_PATH);
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: normalize(process.env.NEXT_PUBLIC_ASSET_PREFIX) ?? basePath,
  images: { unoptimized: true },
};
export default nextConfig;
