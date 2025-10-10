export default function imageLoader({ src, width, quality }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  // srcが既にbasePathを含んでいる場合は重複を避ける
  if (src.startsWith(basePath)) {
    return src;
  }
  return `${basePath}${src}`;
}
