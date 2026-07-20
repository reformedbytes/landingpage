/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Cloudflare Pages serves images via its own CDN; keep default loader off
    // until a specific image strategy (e.g. Cloudflare Images) is chosen.
    unoptimized: true,
  },
};

export default nextConfig;
