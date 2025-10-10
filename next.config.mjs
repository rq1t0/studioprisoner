/** @type {import('next').NextConfig} */
import fs from 'node:fs';
import path from 'node:path';
const isStatic = process.env.NEXT_OUTPUT === 'export';
const isStandalone = process.env.NEXT_OUTPUT === 'standalone';
const BASE_PATH = process.env.NEXT_BASE_PATH || '';

const nextConfig = {
  experimental: {
    serverActions: { bodySizeLimit: '2mb' }
  },
  // Image optimization settings - 表示スピード最優先
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 86400, // 1 day for faster updates
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    loader: 'default',
    unoptimized: false,
  },
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
        ],
      },
    ];
  },
  // Switch between static export and SSR (standalone) via env
  ...(isStatic ? { output: 'export', trailingSlash: true, images: { unoptimized: true } } : {}),
  ...(isStandalone ? { output: 'standalone' } : {}),
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.NEXT_BASE_PATH || ''
  },
  ...(BASE_PATH ? { basePath: BASE_PATH } : {}),
  async rewrites() {
    const rules = [];
    try {
      const dataPath = path.join(process.cwd(), 'data', 'works.json');
      const raw = fs.readFileSync(dataPath, 'utf8');
      const list = JSON.parse(raw) || [];
      list.forEach((w) => {
        const expected = `/images/works/uploads/${w.slug}.jpg`;
        if (w.thumb && w.thumb !== expected) {
          rules.push({ source: expected, destination: w.thumb });
        }
      });
    } catch {}
    rules.push({ source: '/images/about-hero.jpg', destination: '/images/about_top_v5.jpg' });
    return rules;
  }
};

export default nextConfig;
