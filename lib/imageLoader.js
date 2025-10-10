export default function imageLoader({ src, width, quality }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const isProduction = process.env.NODE_ENV === 'production';
  const baseUrl = isProduction ? 'https://rq1t0.github.io/studioprisoner' : '';
  
  // 既に完全なURLの場合はそのまま返す
  if (src.startsWith('http')) {
    return src;
  }
  
  // 既にbasePathを含んでいる場合は重複を避ける
  if (src.startsWith(basePath)) {
    return `${baseUrl}${src}`;
  }
  
  return `${baseUrl}${basePath}${src}`;
}
