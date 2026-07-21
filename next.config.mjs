/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Cloudflare Pages serves images via its own CDN; keep default loader off
    // until a specific image strategy (e.g. Cloudflare Images) is chosen.
    unoptimized: true,
  },
  async headers() {
    return [
      {
        // Next/OpenNext default to s-maxage=31536000 (1 year) for fully
        // static pages, on the Vercel assumption that the CDN cache gets
        // invalidated automatically on every deploy. Cloudflare doesn't do
        // that, so a 1-year edge cache means every future deploy needs a
        // manual purge to actually show up. 1 hour keeps real caching
        // benefit (pages are served from Workers Assets either way, so a
        // miss is cheap) without staying stale for a year.
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, s-maxage=3600, must-revalidate",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
