# WORKS 運用マニュアル

このドキュメントは、WORKS（作品）をサイトに追加・更新するための実務手順書です。画像の準備、保存先、データの書式、推奨サイズ、よくあるエラーと対処までを網羅しています。

## 1. 構成と保存場所
- 作品データ（テキスト/メタ情報）: `data/works.json`
- 作品画像（サムネイル/ヒーロー）: `public/images/works/`
- 型（フィールド定義）: `types/index.ts` の `Work` 型

## 2. 画像の準備（推奨仕様）
- サムネイル（必須）: 正方形 1:1（例: 1200×1200、最小 800×800）
- ヒーロー（任意）: 1:1 または 3:2（横長を想定）。設定しない場合は `thumb` を兼用可能
- 形式: WebP または JPG（品質 80% 目安）
- 命名: `public/images/works/<slug>.jpg` など、`slug` に合わせると管理が楽です
- ファイルサイズ: 500KB 前後を目安（大きすぎる画像は遅延の原因になります）

ヒント: Next/Image は `object-cover` でトリミングされるため、中心に主要要素が来るように余白調整すると見栄えが安定します。

## 3. データの追加方法

### A. スクリプトで追加（推奨）
画像パスから自動的に `public/images/works/` にコピーし、`data/works.json` に追記します。

```
npm run work:import -- /path/to/image.jpg "Artist" "Title" 2025-01-23 "Recording,Mixing"
# or
pnpm work:import -- /path/to/image.jpg "Artist" "Title" 2025-01-23 "Recording,Mixing"
```

単純にエントリだけ追加したい場合:

```
npm run work:add -- <slug> "Artist" "Title" "Full Production" 2025-01-23
# or
pnpm work:add -- <slug> "Artist" "Title" "Full Production" 2025-01-23
```

### B. 手動で追加
1) 画像を `public/images/works/` に配置（例: `public/images/works/echoes-of-night.jpg`）
2) `data/works.json` の先頭にエントリを追加（先頭ほど新しい作品として表示されます）

例（必要最低限）:

```json
{
  "slug": "echoes-of-night",
  "artist": "Mira K.",
  "title": "Echoes of Night",
  "roles": ["Full Production"],
  "releaseDate": "2025-01-23",
  "thumb": "/images/works/echoes-of-night.jpg",
  "hero": "/images/works/echoes-of-night.jpg",
  "body": "作品の説明テキストをここに記載します。"
}
```

## 4. フィールドの説明（`Work` 型）
- `slug`（必須）: ページURLに使う識別子。英数字・ハイフンのケバブケース（例: `echoes-of-night`）
- `artist`（必須）: アーティスト名
- `title`（必須）: タイトル
- `roles`（必須）: 配列。以下から選択: `Recording` | `Mixing` | `Mastering` | `Full Production`
- `releaseDate`（任意）: `YYYY-MM-DD` 形式。新しい順に並び替えに使用
- `thumb`（必須）: サムネイル画像のパス（例: `/images/works/echoes-of-night.jpg`）
- `hero`（任意）: 詳細ページのヒーロー画像のパス（未指定なら `thumb` を流用）
- `youtubeId`（任意）: YouTube の動画ID（例: `dQw4w9WgXcQ`）
- `links`（任意）: 配列。`{ label: string; url: string }`（例: 配信リンクなど）
- `body`（任意）: 作品の説明テキスト（短文〜数百文字）
- `tracks`（任意）: トラックリスト。各項目は `{ title: string; description?: string; youtubeId?: string; url?: string }`
  - `title`: 曲名
  - `description`: 曲の説明（短文）
  - `youtubeId`: 参考動画（YouTube ID）を埋め込み表示
  - `url`: 参考リンク（YouTube以外も可）。`youtubeId` がない場合にリンク表示

補足:
- 一覧の並び順は `releaseDate` の新しい順（無い場合は既存順）
- カードや詳細の代替テキストは基本的に `artist – title` を利用（自動）

## 5. 命名と書式のルール
- `slug`: 小文字英数字とハイフンのみ（例: `stone-and-water`）
- 画像ファイル名: `slug` に合わせる（例: `stone-and-water.jpg`）
- `works.json` は正しい JSON 形式（末尾カンマ禁止、ダブルクォート必須）
- 文字コード: UTF-8（絵文字も可。ただし過度な使用は避ける）

## 6. よくあるエラーと対処
- 画像が表示されない
  - パスが `/images/works/...` で始まっているか確認
  - 実際に `public/images/works/` にファイルが置かれているか確認
- 追加したのに表示されない
  - 開発中はサーバ再起動/ハードリロードを実施
  - 本番は再ビルド/再デプロイが必要な場合あり
- JSON パースエラー
  - カンマ、クォート、配列/オブジェクトの閉じ忘れを確認

## 7. 更新・削除の手順
- 更新: `data/works.json` の該当エントリを編集。必要なら画像も差し替え
- 削除: エントリを削除し、不要な画像は `public/images/works/` から手動削除

## 8. 品質チェック（公開前）
- 画像: 主要素が中央にあるか、サイズは過剰でないか
- テキスト: 誤字脱字チェック、文体の統一（JP/EN）
- 外部リンク: 404や権限エラーがないか
- モバイル: サムネの切れが不自然ではないか

## 9. EN コンテンツの扱い
- WORKS データは共通（単一の `works.json`）です
- EN での文体は短め/簡潔を推奨。必要なら `body` 文言を英語に置換して運用してください

## 10. 参考: スクリプト一覧
- `work:add`: エントリの雛形を `works.json` へ追記
- `work:import`: 画像コピー + `works.json` 追記（推奨）

```
# 開発
pnpm dev

# 本番ビルド
pnpm build && pnpm start
```

---
運用中に不明点があれば、`README.md` の「Data & Content」も参照してください。実際のコンポーネント実装は `app/works` と `components/works-grid.tsx` 付近にあります。
