# 画像ファイル運用ルール

目的: 追加・差し替えが簡単で、参照も迷わないようにする。

基本方針
- 写真系（ヒーロー/ABOUT/WORKS）は `jpg` を基本にする
- アイコン/ロゴなどベクタは `svg`（または既存の `png`）を維持
- ファイル名は `kebab-case`（半角英数字 + ハイフン）で短く分かりやすく

配置
- ヒーロー/共通: `public/images/`（例: `about-hero.jpg`）
- WORKS: `public/images/works/uploads/<slug>.jpg`

トップページの表示順（手動選択）
- `data/home-works.json` に `public/images/works/uploads/` のファイル名を並べた順に表示されます（最大8件）。
- 例:
  ```json
  [
    "top-work-1.jpg",
    "top-work-2.jpg",
    "top-work-3.jpg",
    "top-work-4.jpg",
    "top-work-5.jpg",
    "top-work-6.jpg",
    "top-work-7.jpg",
    "top-work-8.jpg"
  ]
  ```

命名例
- `about-hero.jpg`
- `works/uploads/change-of-generation.jpg`
- `works/uploads/whiteout-limited.jpg`

変換/リネームの考え方
- 既存の複雑な名前（大文字/記号/全角）は、参照側を `<slug>.jpg` に統一済み
- 実ファイル名の変換は任意（後述のスクリプト/コマンドで実施可）
- 物理ファイル名と参照が異なっても、Next.js の `rewrites` で自動解決されます

一括リネーム（今回の既存ファイルをわかりやすい名前へ）
- 実行: `npm run img:rename-uploads`
- 対象: `public/images/works/uploads/` 内の既存ファイル（例: `51YBRWEk2AL.jpg` → `ex-51ybrwek2al.jpg` 等）と `public/images/about_top_v5.jpg` → `about-hero.jpg`
- 参照側は既に `<slug>.jpg` に統一済みなので、そのまま動作します

形式変換（任意）
- macOS: `sips -s format jpeg input.png --out output.jpg`
- ImageMagick: `magick input.png -quality 85 output.jpg`

チェック/整備
- WORKS の参照は `data/works.json` の `thumb`/`hero` を `<slug>.jpg` に統一（済）
- `next.config.mjs` の `rewrites()` が旧ファイル名へ内部転送（参照は常に `<slug>.jpg`）

データの簡略化（おすすめ）
- `data/works.json` は最低限のフィールドだけでOKです（`thumb`/`hero` は省略可）
  - `slug, artist, title, roles, releaseDate` のみで運用可能
  - 参照先は自動で `/images/works/uploads/<slug>.jpg` が補完されます
- CSVから一括更新もできます:
  - `scripts/import-works-csv.mjs` を使う: `npm run works:import:csv -- data/works.csv`
  - ヘッダ: `slug,artist,title,roles,releaseDate,thumb,hero`

WORKS 一覧の並び（新しい順）
- 作品ごとに `addedAt`（ISO: `YYYY-MM-DD`）を設定すると、その日付で新しい順に表示されます。
- `addedAt` がない場合は、画像ファイルの保存日時（mtime）、それもない場合は `releaseDate` を使用します。
