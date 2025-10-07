/** @type {import('next').NextConfig} */
const isStatic = process.env.NEXT_OUTPUT === 'export';
const isStandalone = process.env.NEXT_OUTPUT === 'standalone';

const nextConfig = {
  experimental: {
    serverActions: { bodySizeLimit: '2mb' }
  },
  // Switch between static export and SSR (standalone) via env
  ...(isStatic ? { output: 'export', trailingSlash: true, images: { unoptimized: true } } : {}),
  ...(isStandalone ? { output: 'standalone' } : {}),
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.NEXT_BASE_PATH || ''
  },
};

export default nextConfig;
