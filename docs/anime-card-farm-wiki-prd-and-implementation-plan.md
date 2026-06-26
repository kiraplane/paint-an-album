# Anime Card Farm Wiki PRD 与实现计划

目标站点：Anime Card Farm Wiki  
目标域名：www.animecardfarm.wiki  
当前构建日期：2026-06-26

## 1. 需求摘要

将原 Chrono CCG 模板改造成只服务 Roblox 游戏 Anime Card Farm 的英文攻略站。站点重点覆盖玩家已经在搜索的高意图问题：

- `anime card farm`
- `anime card farm Wiki`
- `anime card farm roblox`
- `anime card farm codes`
- `anime card farm packs`
- `anime card farm cards`
- `anime card farm traits`
- `anime card farm tier list`

本项目不直接照搬 Anime Card Clash、Anime Card Collection 或其他近名 Roblox 游戏的代码、卡牌表、tier list、raid/tower/merchant 信息。首版采用“官方 Roblox 事实 + codes source check + Serper 长尾发现 + YouTube-supported 手写指南 + watch 型卡牌判断”的安全架构。

## 2. 官方事实

| 项目 | 结果 |
| --- | --- |
| 官方页面 | `https://www.roblox.com/games/125039473548047/Anime-Card-Farm` |
| Roblox place ID | `125039473548047` |
| Roblox universe ID | `10144587520` |
| 游戏名 | `[UPD🔥] Anime Card Farm` |
| 描述内名称 | `Anime Card Factory` |
| 创建者 | Roblox group `dream without the vale` |
| 类型 | Simulation / Tycoon |
| 创建时间 | 2026-05-09 |
| 最新 Roblox API 更新时间 | 2026-06-25 |
| 查询时在线人数 | 7,677 |
| 查询时访问量 | 4,405,478 |
| 查询时收藏量 | 271,413 |
| 核心玩法 | 开卡包、升级卡牌、离线赚钱、购买更高级卡包、寻找突变卡、冲榜 |

视觉方向采用官方截图：高饱和 Roblox 卡牌开包感，主色为深夜蓝黑、霓虹青、热粉、卡牌金和少量绿色，不沿用 Chrono CCG 暗红/蒸汽朋克色。

## 3. Serper 长尾词发现

按 `wiki-site-builder` / `wiki-site-growth-iteration` 的 balanced discovery 思路使用共享 Serper key：每个 seed 做 autocomplete + related/search/PAA 发现，不对每个长尾词继续做 SERP 验证。key 不写入项目。

| Seed | 发现词/信号 | 处理 |
| --- | --- | --- |
| `anime card farm` | `anime card farm codes`, `anime card farm roblox`, `anime card farm free`; 同时混入 `anime card clash farm` | codes、Roblox 官方页、混淆说明 |
| `anime card farm roblox` | `codes`, `wiki`, `game`, `f2p`, `packs`, `craft`, `cards`, `tutorial`; 也出现 hack | 新建 `/download`, `/packs`, `/cards`, `/guides/beginner-guide`; hack 安全拒绝 |
| `anime card farm codes` | `codes`, `free`, code sites, YouTube code videos; 混入 Anime Card Collection | 新建 `/codes` + `/guides/codes-redeem-guide` |
| `anime card farm wiki` | `wiki fandom`, `wiki roblox`, `wiki cards`, `wiki guide`, `wiki codes`, `wiki packs`; SERP 混入 Anime Card Clash Fandom | 首页和 `/guides` 承接 wiki intent；新增 wrong-game safety guide |
| `anime card farm tier list` | autocomplete 有 tier list 变体，但 organic 多数是 Anime Card Clash tier list | 不做假 tier list；新建 `/guides/best-cards-watch-guide` |

## 4. Keyword Matrix

| Keyword | Intent | Route | Priority | Status | Evidence | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Anime Card Farm | head term | `/` | P0 | keep | 用户需求、Roblox 官方页、Serper | 首页 H1 使用 Anime Card Farm Wiki |
| Anime Card Farm Wiki | wiki hub | `/` + `/guides` | P0 | keep | Serper autocomplete | 首页做强 hub，guide index 承接 |
| Anime Card Farm Roblox | official access | `/download` | P0 | keep | Roblox 官方页、Serper | 说明 place ID / group |
| Anime Card Farm codes | codes/redeem | `/codes` | P0 | keep | Serper、Beebom、Roblox Den、RoCodes、GameRant、Deltia | 列 source-checked codes，标注未 game-tested |
| Anime Card Farm redeem codes | redeem flow | `/guides/codes-redeem-guide` | P0 | keep | Serper + code pages | 处理失败、拼写冲突、奖励花法 |
| Anime Card Farm packs | pack progression | `/packs` + guide | P0 | keep | Serper autocomplete、官方描述 | pack tier / upgrade route |
| Anime Card Farm cards | card evaluation | `/cards` | P1 | keep | Serper autocomplete、官方描述 | 不做完整数据库，先做 card criteria |
| Anime Card Farm traits | trait gems | `/mutations` + guide | P1 | keep | codes reward + Serper | trait gems 与 mutation 归一到 mutation hub |
| Anime Card Farm mutations | mutation boosts | `/mutations` + guide | P1 | keep | 官方描述 | 精确表格暂缓 |
| Anime Card Farm offline money | idle economy | `/guides/offline-money-guide` | P1 | keep | 官方描述 | 强玩家留存/攻略价值 |
| Anime Card Farm tier list | ranking intent | `/guides/best-cards-watch-guide` | P1 | watch/keep | Serper 有需求但 SERP 混入 Clash | 不做 S/A/B 假榜，做 best-card evaluation |
| Anime Card Farm hack | unsafe shortcut | none / safety guide | P0 | ignore | Serper related | 不提供脚本、外挂、APK |
| Anime Card Clash codes/tier list | different game | `/guides/wrong-game-codes-guide` | P0 | ignore as facts | SERP 混入 | 只作为混淆说明 |
| Anime Card Collection merchant/index | different game | `/guides/wrong-game-codes-guide` | P1 | ignore as facts | SERP 混入 | 只作为混淆说明 |

## 5. 竞品与混淆源

| Source | URL / signal | 观察 | 行动 |
| --- | --- | --- | --- |
| Beebom codes | `https://beebom.com/anime-card-farm-codes/` | 有 Anime Card Farm codes、兑换步骤；TRAIT 拼写与其他源冲突 | 用作 codes 交叉来源，保留冲突说明 |
| Roblox Den codes | `https://robloxden.com/game-codes/anime-card-farm` | 列出 POTIONS、TRAITS! 和 rewards | 用作 active code 交叉来源 |
| RoCodes | `https://rocodes.gg/codes/anime-card-farm` | codes 页面，有 singular TRAIT 变体 | 用作冲突来源 |
| GameRant / Deltia | search results | 列 Anime Card Farm codes 和 reward 类型 | 用作交叉来源，不复制正文 |
| Anime Card Clash Fandom | SERP competitor | 有 cards、raids、tower、tier list，但不是目标游戏 | 不导入事实，做 wrong-game safety |
| Anime Card Collection pages | SERP competitor | 有 merchant、card list、Discord、codes，但不是目标游戏 | 不导入事实 |

## 6. YouTube 选题表

| Video / source | Search intent | Action | Target page | Reason |
| --- | --- | --- | --- | --- |
| `gsjP2zN4qLM` HOW TO PLAY & NEW CODES! Anime Card Farm Guide | beginner / how to play / codes | new_page | `/guides/beginner-guide` | 明确命中 Anime Card Farm Guide，适合首篇入口 |
| `p3cYDtxqOqs` Brand New Codes for Anime Card Farm 2026 | codes | expand/new_page | `/codes`, `/guides/codes-redeem-guide` | 支持 codes intent，但正文不复述视频，结合 code sites 交叉 |
| Anime Card Clash tier-list videos | tier list | watch | `/guides/best-cards-watch-guide` | 多数不是目标游戏，不能作为 ACF tier list 依据 |

## 7. 首版页面

| Route | Purpose |
| --- | --- |
| `/` | Anime Card Farm Wiki homepage hub |
| `/codes` | Active / watch codes, source check, copy buttons |
| `/guides` | Guide index and category hub |
| `/guides/beginner-guide` | First-session route |
| `/guides/codes-redeem-guide` | Redemption and failed-code fixes |
| `/guides/packs-and-upgrades-guide` | Pack and upgrade progression |
| `/guides/offline-money-guide` | Offline money setup |
| `/guides/mutations-and-traits-guide` | Mutations, trait gems, boosted-card decisions |
| `/guides/wrong-game-codes-guide` | Anime Card Farm vs Clash/Collection safety |
| `/guides/best-cards-watch-guide` | Tier-list intent handled safely |
| `/packs` | Pack hub |
| `/cards` | Card evaluation hub |
| `/mutations` | Mutations/traits hub |
| `/download` | Official Roblox page and safe links |
| `/discord` | Community/group link safety |
| `/updates` | Roblox update signal + code freshness |
| `/disclaimer` | Independent site and source disclaimer |

## 8. 暂不直接实现的功能

| Idea | Status | Reason |
| --- | --- | --- |
| Full card database | needs_confirm / watch | 没有可靠 Anime Card Farm card table，不能从 Clash/Collection 复制 |
| Full tier-list engine | watch | 当前 SERP 多数是 Anime Card Clash，证据不足 |
| Mutation/trait calculator | needs_confirm | 需要精确倍率、升级公式或 in-game 测试 |
| Auto code crawler | needs_confirm | 高维护，且需要稳定官方/Discord来源 |

## 9. 已实施清理

- 删除旧 `src/data/chronoccg`
- 删除旧 `src/components/chronoccg`
- 删除旧 `src/app/[locale]/(chronoccg)`
- 删除旧 `public/chronoccg`
- 删除旧 Chrono CCG PRD
- 替换 logo、favicon、OG/hero 图为 Roblox 官方素材
- 更新 `www.animecardfarm.wiki` canonical、middleware、sitemap、manifest、navbar、footer、messages 和法律页

## 10. Validation Plan

```bash
rg -n "Short Answer|short answer|Video Reference|Video reference|this video|in the video|according to this video|the video shows|player search demand|source status" src/app src/data || true
pnpm lint
pnpm exec tsc --noEmit
pnpm build
```

前端改动完成后启动本地 dev server，检查首页、codes、guides、guide detail、packs、download 是否 200，确认 H1、第一屏、sidebar、YouTube iframe 和 guide links 正常渲染。
