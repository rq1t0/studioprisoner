# WORKS 追加マニュアル（画像/データの入れ方）

このプロジェクトで WORKS を追加・並び替えするための最短手順です。迷ったらこの順で進めてください。

## 1. 画像を置く（jpg推奨）
- 置き場所: `public/images/works/uploads/`
- ファイル名: 作品の `slug` に合わせた `kebab-case` + `.jpg`
  - 例: `whiteout-limited.jpg`, `change-of-generation.jpg`
- すでに `top-work-1.jpg` ～ `top-work-8.jpg` を使っている場合は、そのまま差し替えてもOK（TOPの順は後述の `home-works.json` で制御）

## 2. 作品データを追加する（最小項目でOK）
- 編集ファイル: `data/works.json`
- 最小例（thumb/hero は省略可。自動的に `/images/works/uploads/<slug>.jpg` を使います）
```json
{
  "slug": "whiteout-limited",
  "artist": "NOCTURNAL BLOODLUST",
  "title": "WHITEOUT",
  "roles": ["Full Production"],
  "releaseDate": "2026-02-01"
}
```
- 任意項目:
  - `body`（テキスト）
  - `links`（配信URLなど）
  - `tracks`（曲ごとの説明）
  - `addedAt`（一覧の新着判定用。`YYYY-MM-DD`）
  - `homeOrder`（旧方式。TOPの任意順が必要な場合は 3 の `home-works.json` を推奨）

## 3. TOP（ホーム）の表示順を決める
- 編集ファイル: `data/home-works.json`
- 内容: `public/images/works/uploads/` の **ファイル名** を配列で並べるだけ（最大8件）
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
- ここに書いた順がホームの表示順（左上→右下）になります。未記載分は `releaseDate` の新しい順で補完されます。

## 4. WORKS 一覧の並び（新しい順）
- `/works` と `/en/works` は次の優先順で新しい順に表示されます:
  1. `addedAt`（`YYYY-MM-DD` を設定した作品）
  2. 画像ファイルの保存日時（mtime）
  3. `releaseDate`

## 5. まとめて追加したい（CSV インポート）
- CSVヘッダ: `slug,artist,title,roles,releaseDate,thumb,hero`
- 実行:
```
npm run works:import:csv -- data/works.csv
```
- `roles` は `Recording,Mixing` のようにカンマ区切り。`thumb/hero` は省略可（自動補完）。

## 6. 画像名の整理（任意）
- 大量の画像名を正規化（小文字・ハイフン・`.jpeg`→`.jpg`）:
```
npm run img:normalize
```
- 既存の複雑な名前を読みやすい名前へ一括リネーム（初期セットのみ）:
```
npm run img:rename-uploads
```

## 7. よくあるハマりどころ
- 画像が表示されない
  - ファイルが `public/` 配下にあるか（先頭に `/images/...` で参照できるか）
  - `slug` とファイル名が一致しているか（省略時は `/images/works/uploads/<slug>.jpg`）
  - 拡張子は `.jpg` か（`.jpeg` は `.jpg` に統一推奨）
- TOPの順が想定どおりでない
  - `data/home-works.json` の並びを確認
  - 足りない分の補完は `releaseDate` の新しい順です
- 一覧の新着順が違う
  - `addedAt` を設定すると確実に上へ出せます

以上です。運用上のルールやコマンドは `docs/IMAGES.md` にも記載しています。必要に応じてこちらもご参照ください。
