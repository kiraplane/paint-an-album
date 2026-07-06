# Paint an Album Wiki PRD and Implementation Plan

目标站点：Paint an Album Wiki  
目标域名：www.paint-an-album.wiki  
检查日期：2026-07-06

## 1. Project Goal

将当前 Roblox wiki 模板改造成只服务 `Paint an Album` 的英文攻略站。站点主关键词为：

- `paint an album`
- `paint an album wiki`
- `paint an album codes`
- `paint an album roblox`
- `paint an album gamepasses`
- `paint an album album search`
- `paint an album how to play`

Paint an Album 是 Roblox 上的 Party & Casual / Coloring & Drawing 游戏。官方描述确认玩法为：4 人房间，每个玩家认领一个 plot，通过 live database 搜索专辑封面参考，然后 block-by-block 复刻，进度自动保存。

## 2. Official Facts

| Field | Value |
| --- | --- |
| Official page | `https://www.roblox.com/games/120154566897536/Paint-an-Album` |
| Place ID | `120154566897536` |
| Universe ID | `7037902226` |
| Creator | Roblox group `We the real devs.` |
| Genre | Party & Casual / Coloring & Drawing |
| Max players | 4 |
| Created | 2025-01-05T03:07:06.643Z |
| Updated at check | 2026-07-06T07:38:09.8997495Z |
| Visits at check | 12,939,346 |
| Active players at check | 2,350 |

## 3. Keyword Matrix

| Keyword | Intent | Route | Priority | Status | Evidence | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| paint an album | head term | `/` | P0 | keep | Roblox official page, Rolimon, YouTube | Homepage H1 uses Paint an Album Wiki |
| paint an album wiki | wiki hub | `/` + `/guides` | P0 | keep | User requirement, search demand | Build homepage hub and guide index |
| paint an album roblox | official access | `/download` | P0 | keep | Official Roblox page | Verify place ID and safe link |
| paint an album codes | codes status | `/codes` + `/guides/codes-status-guide` | P0 | keep | Earnaldo codes page, Instagram/search snippets | Publish no-code-system status, no fake rewards |
| paint an album how to play | beginner | `/how-to-play` + `/guides/beginner-guide` | P0 | keep | Official description, YouTube gameplay | Explain plot, search, painting passes, autosave |
| paint an album album search | search tool | `/album-search` + guide | P0 | keep | Official description | Live database is the core mechanic |
| paint an album cover ideas | content ideas | `/guides/best-album-cover-ideas-guide` | P1 | keep | Search context around album cover Roblox ideas | Good evergreen guide topic |
| paint an album gamepasses | purchase decision | `/gamepasses` + guide | P1 | keep | Rolimon lists Paint Roller and No Hint Cooldown | Conservative purchase advice |
| paint an album multiplayer | social play | `/guides/multiplayer-lobby-autosave-guide` | P1 | keep | Official 4-player lobby description | Autosave and friend feedback |
| paint an album gallery camera | sharing | `/guides/gallery-camera-sharing-guide` | P1 | keep | Public screenshots/videos show sharing behavior | Useful completion guide |
| paint an album vs paint to hide | comparison | `/guides/paint-an-album-vs-paint-to-hide-guide` | P1 | keep | Earnaldo comparison, SERP confusion | Prevent wrong-game facts |
| paint an album tier list | ranked entities | none | P2 | ignore | Mechanics do not support units/builds | Do not create fake tier list |
| paint an album scripts / mod apk | unsafe shortcut | safety guide only | P0 | ignore | Roblox risk pattern | No scripts, APKs, modified clients |
| paint an album 中文/攻略 | localization | future localized guide set | P2 | localize_later | User Chinese workflow | English launch first |

## 4. Competitor Benchmark

| Competitor | URL | What to match | What to improve |
| --- | --- | --- | --- |
| Roblox official | `https://www.roblox.com/games/120154566897536/Paint-an-Album` | Canonical name, creator, live database, autosave, 4-player lobby | Add player decisions and safety explanation |
| Earnaldo hub | `https://earnaldo.com/blog/paint-an-album` | Head term cluster: guide, codes, comparison | More internal links, richer painting workflow, stronger wiki hub |
| Earnaldo codes | `https://earnaldo.com/blog/paint-an-album-codes` | Honest no-codes status | Clear verification rules and wrong-game warnings |
| Rolimon's | `https://www.rolimons.com/game/120154566897536` | Public stats, gamepass names, no known badges | Treat as medium confidence, do not overclaim gamepass behavior |
| YouTube results | `https://www.youtube.com/results?search_query=Paint+an+Album+Roblox` | Gameplay/timelapse source material | Use videos as support, not transcript-spun articles |

Page breadth recommendation：Paint an Album 资料薄但访问增长明显，首版做 10 篇英文 guide + 6 个 hub/status/legal 页面即可。暂不做 tier list、badge database、item database、calculator。

## 5. Route Plan

| Route | Purpose |
| --- | --- |
| `/` | Homepage hub |
| `/guides` | Guide index |
| `/how-to-play` | Core gameplay hub |
| `/album-search` | Live database and cover ideas hub |
| `/tools` | Painting workflow and tools hub |
| `/gamepasses` | Paint Roller / No Hint Cooldown purchase hub |
| `/codes` | No verified codes status page |
| `/download` | Official Roblox safe links |
| `/updates` | Source check log |
| `/disclaimer` | Legal and source boundary |
| `/guides/beginner-guide` | First cover guide |
| `/guides/album-search-live-database-guide` | Search workflow |
| `/guides/clean-album-cover-painting-guide` | Painting pass workflow |
| `/guides/color-matching-and-block-planning-guide` | Palette/grid planning |
| `/guides/multiplayer-lobby-autosave-guide` | Four-player lobby and autosave |
| `/guides/gamepasses-paint-roller-no-hint-cooldown-guide` | Gamepass decision guide |
| `/guides/codes-status-guide` | Codes verification guide |
| `/guides/gallery-camera-sharing-guide` | Sharing and screenshots |
| `/guides/best-album-cover-ideas-guide` | Cover idea selection |
| `/guides/paint-an-album-vs-paint-to-hide-guide` | Wrong-game comparison |
| `/guides/official-links-safety-guide` | Official link safety |

## 6. Visual Direction

Paint an Album is a relaxed creative / music-cover game. The site uses a compact wiki layout with:

- deep ink background `#140F17`
- canvas text `#FFF8E8`
- coral CTA `#F76F5E`
- mint link/accent `#3ED7B5`
- album-label yellow `#F7D154`
- muted mauve borders `#3B303F`

The palette avoids the old cold tycoon style and instead matches album-art blocks, paint tools, and a studio-board feel.

## 7. Implementation Summary

- Data layer moved to `src/data/paintalbum/`.
- Route group moved to `src/app/[locale]/(paintalbum)/`.
- Components moved to `src/components/paintalbum/`.
- Public assets created under `public/paintalbum/` from Roblox thumbnails.
- Navbar, footer, metadata, manifest, sitemap, middleware, canonical URL, env sample, and Wrangler config updated to `paint-an-album`.
- Codes page intentionally lists 0 active codes and no watch strings until a real code box is verified.
- No tier list or entity database added because the game mechanics do not support that intent.

## 8. Follow-up Ops

- Create GitHub repo `paint-an-album`, set origin, commit, and push.
- Deploy Cloudflare Worker project `paint-an-album` using `pnpm cf:deploy`.
- Bind `paint-an-album.wiki` and `www.paint-an-album.wiki`.
- Create GA property via the existing GA-GTM authorization workflow when credentials/project are available.
