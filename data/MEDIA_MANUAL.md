# MEDIA 追加マニュアル（動画の入れ方・並び替え）

最短で「動画を追加して、順番を決める」ための手順です。日本語/英語ページともに同じデータを共有します。

## 1) 追加する
- 追加先: `data/media.json`
- 形式: 次のいずれか（どちらでもOK）
  - YouTube ID を直接書く
  - YouTube のフル URL を貼る（自動で ID 抽出）

例（IDで指定）
```
{
  "youtubeId": "ysz5S6PUM-U",
  "title": "Studio Tour",
  "description": "スタジオ紹介のダイジェスト"
}
```

例（URLで指定）
```
{
  "url": "https://youtu.be/ysz5S6PUM-U",
  "title": "Studio Tour",
  "description": "スタジオ紹介のダイジェスト"
}
```

## 2) 並び順を決める（3通り・上から優先）
1. `data/media-order.json` に YouTube ID を並べる（最優先）
   - 記述例:
   ```
   [
     "ysz5S6PUM-U",
     "hY7m5jjJ9mM"
   ]
   ```
   - ここに無い ID は、後ろにファイル順で続きます。
2. `data/media.json` 各アイテムに `order`（数値・小さいほど先）を付与する
   - 記述例:
   ```
   { "youtubeId": "ysz5S6PUM-U", "title": "Studio Tour", "order": 1 }
   { "youtubeId": "hY7m5jjJ9mM", "title": "Session Breakdown", "order": 2 }
   ```
3. 何も設定しなければ `data/media.json` のファイル記述順

## 備考
- 現状は YouTube のみ対応（`youtube.com` / `youtu.be` / `embed` / `shorts` 形式に対応）。
- EN ページ（`/en/media`）も同じデータを利用します。
- 並び替えが頻繁な場合は `media-order.json` を編集するのが最も楽です。

