import { CHECKED_AT, officialGameFacts, siteDescription } from './sources';
import type { Guide, GuideCategory, GuideVideo } from './types';

const youtubeThumbnail = (id: string) =>
  `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

const videos = {
  beginner: {
    id: 'gsjP2zN4qLM',
    title: 'HOW TO PLAY & NEW CODES! Anime Card Farm Guide',
    channel: 'YouTube creator guide',
    url: 'https://www.youtube.com/watch?v=gsjP2zN4qLM',
    thumbnailUrl: youtubeThumbnail('gsjP2zN4qLM'),
    publishedAt: '2026-06',
    checkedAt: CHECKED_AT,
  },
  codes: {
    id: 'p3cYDtxqOqs',
    title: 'Brand New Codes for Anime Card Farm 2026',
    channel: 'Roblox codes creator',
    url: 'https://www.youtube.com/watch?v=p3cYDtxqOqs',
    thumbnailUrl: youtubeThumbnail('p3cYDtxqOqs'),
    publishedAt: '2026-06',
    checkedAt: CHECKED_AT,
  },
} satisfies Record<string, GuideVideo>;

const localCover = '/animecardfarm/hero.jpg';
const videoCover = (video: GuideVideo) => video.thumbnailUrl;

export { siteDescription };

export const guideCategoryIntro: Record<GuideCategory, string> = {
  Beginner:
    'Start with the Roblox loop: claim safe codes, open packs, upgrade earners, and set up offline income before leaving.',
  Codes:
    'Redeem source-checked codes, understand spelling conflicts, and spend rewards where they matter.',
  Packs: 'Use pack upgrades as an income route, not a random spending sink.',
  Economy:
    'Turn active sessions and offline income into a repeatable money cycle.',
  Mutations:
    'Understand mutated cards, trait gems, and when boosts deserve upgrades.',
  Safety:
    'Avoid wrong-game codes, fake APKs, and guides for Anime Card Clash or Anime Card Collection.',
  Updates: 'Track the live Roblox update state without inventing patch notes.',
};

export const relatedRouteLabels: Record<string, string> = {
  '/': 'Anime Card Farm Wiki',
  '/codes': 'Anime Card Farm Codes',
  '/guides': 'All Anime Card Farm Guides',
  '/packs': 'Packs and Upgrade Hub',
  '/cards': 'Cards and Income Hub',
  '/mutations': 'Mutations and Traits Hub',
  '/download': 'Official Roblox Page',
  '/discord': 'Discord and Group Links',
  '/updates': 'Update Tracker',
  '/guides/beginner-guide': 'Beginner Guide',
  '/guides/codes-redeem-guide': 'Codes Redeem Guide',
  '/guides/packs-and-upgrades-guide': 'Packs and Upgrades Guide',
  '/guides/offline-money-guide': 'Offline Money Guide',
  '/guides/mutations-and-traits-guide': 'Mutations and Traits Guide',
  '/guides/wrong-game-codes-guide': 'Wrong-Game Codes Guide',
  '/guides/best-cards-watch-guide': 'Best Cards Watch Guide',
};

export const guides: Guide[] = [
  {
    slug: 'beginner-guide',
    title: 'Anime Card Farm Beginner Guide',
    seoTitle: 'Anime Card Farm Beginner Guide - Codes, Packs and Upgrades',
    seoDescription:
      'Start Anime Card Farm on Roblox with codes, pack opening, card upgrades, offline money setup, mutations, trait gems, and early spending mistakes to avoid.',
    summary:
      'A first-session route for Anime Card Farm: redeem codes, open packs with a plan, upgrade the cards that improve income, set up offline money, and avoid confusing this game with Anime Card Clash or Anime Card Collection.',
    category: 'Beginner',
    difficulty: 'Beginner',
    coverImageUrl: videoCover(videos.beginner),
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'user_intent_youtube',
    sourceNotes:
      'Built from the official Roblox description, Roblox universe API facts, Serper long-tail discovery, and current YouTube guide results.',
    video: videos.beginner,
    videoSearchQueries: [
      'Anime Card Farm beginner guide',
      'Anime Card Farm how to play',
      'Anime Card Farm Roblox tutorial',
    ],
    tags: ['Roblox', 'First Session', 'Packs'],
    relatedRoutes: [
      '/codes',
      '/packs',
      '/mutations',
      '/guides/offline-money-guide',
      '/guides/packs-and-upgrades-guide',
    ],
    body: [
      {
        heading: 'Treat the first hour as an income setup',
        paragraphs: [
          'Anime Card Farm is a Roblox idle card collector. The official game page describes the core loop clearly: open card packs, reveal anime cards, upgrade cards for more money, buy stronger packs, hunt rare mutated cards, and climb the leaderboard. That means your first hour is not about owning every card. It is about building a stable money engine that keeps improving while you play and while you are offline.',
          'The biggest early mistake is spending every dollar the moment a new pack button becomes available. Packs feel exciting, but a pack is only good when the cards inside raise your earning pace enough to pay for the next jump. Start by learning which current cards carry your income, then upgrade those before chasing every flashy rarity.',
        ],
        bullets: [
          'Redeem current codes before a real session so potions and trait gems can be used with a plan.',
          'Open enough starter packs to replace weak cards, then pause and upgrade your best earners.',
          'Use better packs when your income can recover quickly from the purchase.',
          'Before logging off, leave your account in the best money-generating state you can afford.',
        ],
      },
      {
        heading: 'Redeem codes before spending your first boost window',
        paragraphs: [
          'Current search demand for Anime Card Farm codes is strong, and multiple code sources agree that the game has reward codes for potions and trait gems. Use the codes page first, copy the exact casing, and then decide what you are trying to improve. A Luck or Mutation boost is wasted if you activate it while clicking around menus without enough cash to open packs.',
          'A clean beginner sequence is to redeem codes, read the reward text, then open packs during the most useful boost window. If the reward improves traits or mutations, do not immediately spend the related currency on a random card. Wait until you know which card is actually helping your income.',
        ],
      },
      {
        heading: 'Upgrade for money per second, not just card rarity',
        paragraphs: [
          'The Roblox game icon and description both emphasize money generation. A rare-looking card that stays unupgraded may be weaker for your account than a less exciting card that already produces steady income. Early progression should compare cards by the money they create, the cost to improve them, and whether a mutation or trait makes them worth keeping longer.',
          'When you get a new card, ask three questions. Does it immediately raise income? Can you afford upgrades without draining the next pack goal? Does it have a mutation or trait that changes the decision? If the answer is no, keep farming and save for a better pack tier instead of overinvesting.',
        ],
      },
      {
        heading: 'Build around offline money before leaving Roblox',
        paragraphs: [
          'The official description says packs open and money generates while you are offline. That is the mechanic that separates Anime Card Farm from a pure clicker. Your account should end each session with its best available income setup active, because offline time can become the bridge to the next pack tier.',
          'Before leaving, spend a minute checking that your best earners are upgraded, your active boosts are not about to be wasted, and your next goal is obvious. If you only log out after emptying your cash into weak packs, the offline period will be slower than it needs to be.',
        ],
      },
      {
        heading: 'Keep the game names separate',
        paragraphs: [
          'Google and Serper results mix Anime Card Farm with Anime Card Clash and Anime Card Collection. Those games have their own codes, cards, tower or index systems, and wiki pages. Do not paste Anime Card Clash codes into Anime Card Farm, and do not treat a Card Collection merchant or index guide as proof for this game.',
          'Use the Roblox place ID and game title as your anchor. The correct official page is the Anime Card Farm Roblox experience by the group dream without the vale. If a guide talks about raids, towers, expeditions, travelling merchants, or a different place ID, treat it as a different game until proven otherwise.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is Anime Card Farm about?',
        answer:
          'It is a Roblox idle card collector where players open packs, upgrade anime cards, generate money offline, buy stronger packs, and look for rare mutated cards.',
      },
      {
        question: 'Should I redeem Anime Card Farm codes first?',
        answer:
          'Yes. Redeem current codes before a focused session, then use potions and trait rewards on pack opening, upgrades, or mutation decisions instead of spending them randomly.',
      },
      {
        question: 'Is Anime Card Farm the same as Anime Card Clash?',
        answer:
          'No. Search results often mix the names, but Anime Card Farm, Anime Card Clash, and Anime Card Collection are separate Roblox games with different codes and systems.',
      },
    ],
  },
  {
    slug: 'codes-redeem-guide',
    title: 'Anime Card Farm Codes Redeem Guide',
    seoTitle: 'Anime Card Farm Codes - How to Redeem and Spend Rewards',
    seoDescription:
      'Use Anime Card Farm codes safely on Roblox, fix failed code entries, handle TRAITS spelling conflicts, and spend potions or trait gems without wasting boosts.',
    summary:
      'A practical redemption route for Anime Card Farm codes, including exact-code checks, failed-entry fixes, and the best way to use potions and trait gems after claiming rewards.',
    category: 'Codes',
    difficulty: 'Beginner',
    coverImageUrl: videoCover(videos.codes),
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'community_crosscheck',
    sourceNotes:
      'Cross-checked against current Beebom, Roblox Den, RoCodes, GameRant, Deltia, Reddit, and YouTube code results. Codes are source-checked, not game-tested by this site.',
    video: videos.codes,
    videoSearchQueries: [
      'Anime Card Farm codes',
      'Anime Card Farm Roblox codes',
      'Anime Card Farm code redeem',
    ],
    tags: ['Codes', 'Roblox', 'Rewards'],
    relatedRoutes: [
      '/codes',
      '/guides/beginner-guide',
      '/guides/packs-and-upgrades-guide',
      '/guides/wrong-game-codes-guide',
    ],
    body: [
      {
        heading: 'Copy codes exactly before checking anything else',
        paragraphs: [
          'Anime Card Farm code entries are short, but punctuation matters. Current code sources agree on POTIONS and mostly agree on TRAITS! with an exclamation mark. Because some sources show a singular TRAIT! variant, treat spelling as the first troubleshooting step, not as a reason to trust every reposted list you see.',
          'Use the codes page on this site as your starting list, copy the code, and redeem inside the official Roblox experience. Avoid browser extensions, external reward tools, or pages that ask for your Roblox password. A normal Anime Card Farm code should never require account credentials outside Roblox.',
        ],
      },
      {
        heading: 'Redeem from the official game, then plan the reward',
        paragraphs: [
          'Most current guides describe redemption through the in-game Shop area. Launch the official Anime Card Farm experience, open the code entry panel, paste the code, and confirm. If a code succeeds, do not immediately activate every boost unless you are ready to open packs or use the reward.',
          'A cash or luck potion is strongest when you have enough time and enough money to act during the boost. Trait gems are strongest when you already know which card deserves trait attention. If you redeem, claim, and then leave the game without a plan, the reward may still work, but it will not move your account as efficiently.',
        ],
      },
      {
        heading: 'Fix failed code messages in a safe order',
        paragraphs: [
          'A failed code does not always mean the list is fake. Roblox servers can lag, codes can be case-sensitive, punctuation can be missed, and code sources can disagree. Check that you are in Anime Card Farm, not Anime Card Clash or Anime Card Collection, then copy the exact code again.',
          'If the code still fails, check whether the official Roblox group or Discord has a new announcement. When sources disagree, this site keeps the conflict visible instead of adding every variant as active. That is slower, but it is better than training players to paste old or wrong-game strings.',
        ],
        bullets: [
          'Confirm the Roblox place is Anime Card Farm by dream without the vale.',
          'Copy the full code, including exclamation marks.',
          'Try a fresh server if the code panel seems stuck.',
          'Do not trust code pages for Anime Card Clash or Anime Card Collection.',
        ],
      },
      {
        heading: 'Spend code rewards on one progression job at a time',
        paragraphs: [
          'The best use of a code reward depends on where your account is blocked. If packs are too expensive, cash and income upgrades matter first. If your best card has a promising mutation path, trait-related rewards become more valuable. If you are still replacing starter cards, save rare upgrade resources until the account has a card worth keeping.',
          'This is the main reason codes are not a full progression plan. They give a push, but the Roblox loop still rewards a disciplined sequence: packs create better cards, upgrades raise money, money buys stronger packs, and mutations or traits decide which cards deserve longer investment.',
        ],
      },
    ],
    faq: [
      {
        question: 'Are Anime Card Farm codes game-tested here?',
        answer:
          'No. Codes are source-checked against current public sources, but this site did not redeem them in-game.',
      },
      {
        question: 'Why is TRAIT or TRAITS listed differently on some sites?',
        answer:
          'Current sources conflict. This site lists TRAITS! as the active spelling with medium confidence and keeps TRAIT! on the watchlist until the conflict is clearer.',
      },
      {
        question: 'Can Anime Card Clash codes work in Anime Card Farm?',
        answer:
          'No. They are different Roblox games, so codes should be treated as separate unless an official source says otherwise.',
      },
    ],
  },
  {
    slug: 'packs-and-upgrades-guide',
    title: 'Anime Card Farm Packs and Upgrades Guide',
    seoTitle: 'Anime Card Farm Packs Guide - Upgrades, Epic Packs and Income',
    seoDescription:
      'Learn when to buy packs in Anime Card Farm, how to upgrade cards for income, when to stop opening weak packs, and how to avoid early spending traps.',
    summary:
      'A pack-buying and upgrade route for Anime Card Farm players who want more money per session instead of random card pulls.',
    category: 'Packs',
    difficulty: 'Beginner',
    coverImageUrl: localCover,
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'manual_data',
    sourceNotes:
      'Based on official Roblox gameplay copy, current guide demand, and visible pack/upgrading loop from Roblox media.',
    videoSearchQueries: [
      'Anime Card Farm packs',
      'Anime Card Farm upgrades',
      'Anime Card Farm Roblox packs',
    ],
    tags: ['Packs', 'Upgrades', 'Income'],
    relatedRoutes: [
      '/packs',
      '/cards',
      '/guides/offline-money-guide',
      '/guides/mutations-and-traits-guide',
    ],
    body: [
      {
        heading: 'Packs are a ladder, not a slot machine',
        paragraphs: [
          'The official description tells players to buy more epic packs and flex their cards, but the useful interpretation is simpler: each pack tier should help your money engine reach the next tier. If a new pack costs so much that it leaves you unable to upgrade the useful cards you just pulled, you may be moving too early.',
          'A good pack step should either replace a weak earner, add a card with better long-term income, or create a mutation or trait opportunity. If a purchase does none of those things, the account may need more upgrades before the next pack jump.',
        ],
      },
      {
        heading: 'Upgrade the card that changes your income curve',
        paragraphs: [
          'Anime Card Farm is generous about giving you cards to look at, but income is the real progression signal. Your best upgrade target is not always the rarest card on the screen. It is the card whose next upgrade pays back fastest or unlocks enough income to make better packs realistic.',
          'When two cards look close, prefer the one that helps offline money. The game page explicitly says money generates while you are offline, so long-term earning power matters more than a short burst of visual rarity. That is especially true when you are about to log out.',
        ],
      },
      {
        heading: 'Stop opening starter packs once replacements slow down',
        paragraphs: [
          'Starter packs are useful because they fill the board and teach the loop. They become inefficient when most pulls no longer replace your current earners. At that point, spending more on the same tier may feel active but produce little account movement.',
          'The practical stop rule is to pause when several packs in a row fail to improve your earning setup. Upgrade the winners, let offline money catch up, then move toward a stronger pack tier. This keeps the account from drowning in small cards that cost attention but do not change income.',
        ],
      },
      {
        heading: 'Save mutation decisions for cards you can keep',
        paragraphs: [
          'Rare mutated cards can have major boosts, but a mutation on a card you will replace in five minutes may not deserve deep investment. Treat mutation as a reason to evaluate the card again, not as an automatic order to spend every resource.',
          'If a mutated card improves current income and has upgrade costs you can support, keep building it. If the mutation is interesting but the base card is far behind your pack tier, record it mentally and keep farming. A better pack tier may give you a stronger version of the same account job.',
        ],
      },
    ],
    faq: [
      {
        question: 'Should I always buy the newest pack I can afford?',
        answer:
          'No. Buy a higher pack when your income can recover from the cost and the pack is likely to replace current cards or unlock better upgrades.',
      },
      {
        question: 'What card should I upgrade first?',
        answer:
          'Upgrade the card that improves money generation most efficiently, especially if it also improves offline income before you leave the game.',
      },
      {
        question: 'Are epic packs always worth it?',
        answer:
          'Epic packs are the goal of the loop, but they are strongest when your account can afford them repeatedly instead of buying one and stalling.',
      },
    ],
  },
  {
    slug: 'offline-money-guide',
    title: 'Anime Card Farm Offline Money Guide',
    seoTitle: 'Anime Card Farm Offline Money Guide - Best Setup Before Leaving',
    seoDescription:
      'Set up Anime Card Farm offline money with better card upgrades, boost timing, pack goals, and a pre-logout checklist for Roblox idle progress.',
    summary:
      'A simple checklist for making Anime Card Farm keep working while you are offline: upgrade the right earners, avoid wasting boosts, and log out with a clear next pack goal.',
    category: 'Economy',
    difficulty: 'Beginner',
    coverImageUrl: localCover,
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'official',
    sourceNotes:
      'The official Roblox description explicitly says packs open and money generates while players are offline.',
    videoSearchQueries: [
      'Anime Card Farm offline money',
      'Anime Card Farm money guide',
      'Anime Card Farm best farm',
    ],
    tags: ['Offline', 'Money', 'Idle'],
    relatedRoutes: [
      '/packs',
      '/cards',
      '/guides/packs-and-upgrades-guide',
      '/guides/mutations-and-traits-guide',
    ],
    body: [
      {
        heading: 'Offline time should start from your strongest board',
        paragraphs: [
          'Anime Card Farm rewards players who prepare before closing Roblox. If money keeps generating while you are offline, the last setup you leave behind matters. A rushed logout after random pack opening can lock in a weak income state for the entire break.',
          'Before you leave, look at the cards currently responsible for your money. Upgrade the best affordable earners, avoid spending all cash on a pack that gives no improvement, and make sure the next session starts close to a meaningful purchase instead of back at zero.',
        ],
      },
      {
        heading: 'Use active time for decisions, offline time for compounding',
        paragraphs: [
          'Active play is best for opening packs, comparing cards, using boosts, and deciding which mutations are worth keeping. Offline time is best for letting an already-chosen income setup compound. Mixing those jobs is where players lose value.',
          'If you activate a boost and immediately go offline, you may miss the part of the session where you can make decisions from the boosted result. If you spend all cash right before leaving, offline income may have less power. A steady rhythm is stronger: active session for upgrades, offline break for growth, next session for pack tier movement.',
        ],
      },
      {
        heading: 'Use a three-step logout checklist',
        paragraphs: [
          'The checklist is intentionally short. First, upgrade the card or cards that currently define your money per second. Second, stop opening packs once the next purchase would leave the account weaker for offline time. Third, set a visible next target: a better pack tier, a specific upgrade, or a mutation/trait decision.',
          'This prevents the common idle-game trap where every session ends with empty cash and no plan. Anime Card Farm is simple enough that a clear loop beats constant menu hopping.',
        ],
        bullets: [
          'Upgrade best current earners.',
          'Do not drain cash into low-value packs right before leaving.',
          'Save trait or mutation currency for a card that will stay relevant.',
          'Know what the next login is supposed to buy.',
        ],
      },
      {
        heading: 'Let offline money choose your next pack tier',
        paragraphs: [
          'If you return from offline time and can buy the next pack without ruining upgrades, move up. If you return and still need many minutes just to afford one pull, stay on the current tier and strengthen the earning setup. The game loop is about repeatable progress, not one lucky purchase.',
          'This rule also protects free-to-play players. You do not need to chase every moment of live play if offline growth is prepared well. Short, focused sessions can still move the account when each logout is deliberate.',
        ],
      },
    ],
    faq: [
      {
        question: 'Does Anime Card Farm make money while offline?',
        answer:
          'Yes. The official Roblox description says money generates while you are offline.',
      },
      {
        question: 'What should I do before logging out?',
        answer:
          'Upgrade your best income cards, avoid draining cash into weak packs, and leave with a clear next pack or upgrade goal.',
      },
      {
        question: 'Should I use boosts right before going offline?',
        answer:
          'Usually no. Boosts are strongest when you can actively open packs, compare cards, and spend the results during the boosted window.',
      },
    ],
  },
  {
    slug: 'mutations-and-traits-guide',
    title: 'Anime Card Farm Mutations and Traits Guide',
    seoTitle: 'Anime Card Farm Mutations Guide - Traits, Trait Gems and Boosts',
    seoDescription:
      'Understand Anime Card Farm mutations, trait gems, boosted cards, and when a rare mutated card deserves upgrades or should be replaced.',
    summary:
      'A cautious mutation and trait guide for Anime Card Farm players who want to identify valuable boosted cards without wasting scarce trait rewards.',
    category: 'Mutations',
    difficulty: 'Intermediate',
    coverImageUrl: localCover,
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'manual_data',
    sourceNotes:
      'Based on official Roblox mutation wording plus current code rewards mentioning trait gems. Exact mutation tables are deferred until reliable data exists.',
    videoSearchQueries: [
      'Anime Card Farm mutations',
      'Anime Card Farm traits',
      'Anime Card Farm trait gems',
    ],
    tags: ['Mutations', 'Traits', 'Trait Gems'],
    relatedRoutes: [
      '/mutations',
      '/codes',
      '/guides/codes-redeem-guide',
      '/guides/best-cards-watch-guide',
    ],
    body: [
      {
        heading: 'Mutation is a filter, not an automatic upgrade order',
        paragraphs: [
          'The official Roblox description calls out rare mutated cards with insane boosts. That tells us mutations matter, but it does not mean every mutated pull deserves all your money. A mutation makes a card worth checking again against your current income and pack tier.',
          'The safest first rule is to compare the mutated card to what it replaces. If the mutation pushes money generation above your current setup, upgrade it carefully. If it looks exciting but still earns less than your normal cards, keep progressing and wait for a better base card.',
        ],
      },
      {
        heading: 'Trait gems should follow your keeper cards',
        paragraphs: [
          'Current Anime Card Farm codes include trait-gem rewards in multiple sources. That makes trait choices an early search topic, but exact trait tables are not reliable enough to turn into a fake ranking yet. Use trait gems on cards you expect to keep, not on the first card that happens to have a good color or rarity.',
          'A keeper card usually has three signs: it improves money right now, it belongs to your current or next pack tier, and its upgrade cost is still affordable. If a card fails two of those signs, trait resources are probably better saved.',
        ],
      },
      {
        heading: 'Separate income boosts from collection flex',
        paragraphs: [
          'Anime Card Farm has a flex element because rare anime cards look good and leaderboards reward visible progress. Still, a card can be cool without being the best income decision. If you are pushing progression, the important boost is the one that changes how quickly you buy packs and upgrades.',
          'Collection flex becomes more important after your income is stable. Early on, sell or sideline the idea that every shiny card must be upgraded. Keep the cards that move the loop, then come back to collection goals once the account has enough income to experiment.',
        ],
      },
      {
        heading: 'Wait for verified data before trusting full tier lists',
        paragraphs: [
          'Serper found tier-list demand, but current search results mostly point to Anime Card Clash tier lists, not Anime Card Farm data. That is a warning sign. A full mutation or card tier list needs either in-game testing, reliable extracted data, or a strong current community consensus for this exact Roblox experience.',
          'Until then, this site uses a best-cards watch approach: evaluate cards by income, mutation value, upgrade cost, and how long the card will remain useful. That is less flashy than a giant S-tier table, but it is much safer for a new Roblox game with thin public data.',
        ],
      },
    ],
    faq: [
      {
        question: 'What are mutations in Anime Card Farm?',
        answer:
          'The official page describes rare mutated cards as boosted versions. Exact mutation values should be checked in-game because public data is still thin.',
      },
      {
        question: 'Where should I spend trait gems?',
        answer:
          'Spend trait gems on cards that improve income, are not about to be replaced, and have upgrade costs your account can support.',
      },
      {
        question: 'Is there a reliable Anime Card Farm tier list?',
        answer:
          'Not enough reliable public data yet. Many current tier-list results are for Anime Card Clash, so use income and mutation criteria instead of copied rankings.',
      },
    ],
  },
  {
    slug: 'wrong-game-codes-guide',
    title: 'Anime Card Farm vs Anime Card Clash and Collection',
    seoTitle: 'Anime Card Farm vs Anime Card Clash - Avoid Wrong Codes',
    seoDescription:
      'Keep Anime Card Farm separate from Anime Card Clash and Anime Card Collection when searching for Roblox codes, card lists, packs, and wiki guides.',
    summary:
      'Search results mix several Roblox anime card games. This guide shows how to verify the correct Anime Card Farm page before using codes or progression advice.',
    category: 'Safety',
    difficulty: 'Beginner',
    coverImageUrl: localCover,
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'manual_data',
    sourceNotes:
      'Created because Serper autocomplete and organic results mix Anime Card Farm with Anime Card Clash and Anime Card Collection.',
    videoSearchQueries: [
      'Anime Card Farm wiki',
      'Anime Card Farm Anime Card Clash',
      'Anime Card Farm Anime Card Collection',
    ],
    tags: ['Safety', 'Wrong Game', 'Roblox'],
    relatedRoutes: ['/download', '/codes', '/guides/codes-redeem-guide'],
    body: [
      {
        heading: 'Use the Roblox place ID as the final check',
        paragraphs: [
          'The correct Anime Card Farm Roblox page uses place ID 125039473548047 and universe ID 10144587520. The creator is the Roblox group dream without the vale. If a guide, code page, or wiki points to a different place, treat it as a different game until an official source says otherwise.',
          'This matters because Google results currently mix Anime Card Farm with Anime Card Clash and Anime Card Collection. Those pages can be useful for understanding what players search for, but they should not be used as factual sources for Anime Card Farm rewards, cards, towers, merchants, or tier lists.',
        ],
      },
      {
        heading: 'Do not import Anime Card Clash systems',
        paragraphs: [
          'Anime Card Clash search results mention towers, raids, expeditions, roll speed, and card tier lists. Those are not proof of Anime Card Farm systems. A Clash tier list can rank cards from that game without telling you anything about Anime Card Farm money generation or mutations.',
          'If a page talks about Cifer, towers, raids, expeditions, or instant rolls, it is likely covering Anime Card Clash. Use it as a sign that anime-card Roblox players care about guides, not as a source for this site.',
        ],
      },
      {
        heading: 'Do not import Anime Card Collection merchant advice',
        paragraphs: [
          'Anime Card Collection results mention a travelling merchant, card index, bundles, and its own codes. Those terms can appear near Anime Card Farm because the titles are similar and both games involve Roblox card collecting. They are still separate experiences.',
          'Before following any merchant, index, or bundle guide, verify the exact Roblox game title and page. If the official page is not Anime Card Farm by dream without the vale, the advice does not belong on this site.',
        ],
      },
      {
        heading: 'Unsafe shortcuts are not worth the account risk',
        paragraphs: [
          'Serper also surfaced hack-related searches. This site does not provide scripts, modified clients, exploit instructions, or account-risk shortcuts. For Roblox games, the safest route is the official Roblox experience, official group updates, and public codes that can be redeemed inside the game.',
          'If a page asks for your Roblox password, tells you to install a script executor, or claims to duplicate packs, leave it. A small speed-up is not worth losing the account or exposing personal data.',
        ],
      },
    ],
    faq: [
      {
        question: 'Can I use Anime Card Clash codes in Anime Card Farm?',
        answer:
          'No. They are different Roblox experiences, so codes should not be shared unless the Anime Card Farm developer confirms it.',
      },
      {
        question: 'Why do search results show Anime Card Collection?',
        answer:
          'The titles and mechanics are similar enough that search engines mix them. Always check the Roblox place and creator before trusting a guide.',
      },
      {
        question: 'Does this site link to scripts or hacks?',
        answer:
          'No. The site only points players toward official Roblox access, safe code redemption, and ordinary progression advice.',
      },
    ],
  },
  {
    slug: 'best-cards-watch-guide',
    title: 'Anime Card Farm Best Cards Watch',
    seoTitle:
      'Anime Card Farm Best Cards - Income, Mutations and Tier List Watch',
    seoDescription:
      'Evaluate the best Anime Card Farm cards by income, mutation value, upgrade cost, and source confidence while avoiding copied Anime Card Clash tier lists.',
    summary:
      'A safe alternative to a fake Anime Card Farm tier list: use income, mutation boosts, upgrade cost, and replacement timing to decide which cards deserve investment.',
    category: 'Updates',
    difficulty: 'Intermediate',
    coverImageUrl: localCover,
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'manual_data',
    sourceNotes:
      'Tier-list demand exists, but current ranked results are mostly for Anime Card Clash. This page stays decision-first until reliable Anime Card Farm card data exists.',
    videoSearchQueries: [
      'Anime Card Farm best cards',
      'Anime Card Farm tier list',
      'Anime Card Farm legendary cards',
    ],
    tags: ['Best Cards', 'Tier List Watch', 'Income'],
    relatedRoutes: [
      '/cards',
      '/mutations',
      '/guides/mutations-and-traits-guide',
    ],
    body: [
      {
        heading: 'The best card is the one that moves your next purchase',
        paragraphs: [
          'In Anime Card Farm, a card is valuable when it helps the account reach better packs, stronger upgrades, or leaderboard progress faster. Rarity is part of the signal, but it is not enough by itself. A high-rarity card with poor upgrade timing can lose to a lower-rarity card that improves money immediately.',
          'When you pull a new card, compare the card to your current income route. If it raises income, has a mutation worth keeping, or makes the next pack tier realistic, it is a strong candidate. If it only looks rare but does not change the money curve, wait before overinvesting.',
        ],
      },
      {
        heading: 'Use four checks instead of a copied tier list',
        paragraphs: [
          'A reliable tier list needs real Anime Card Farm data. Current search results include tier-list terms, but many actual results are for Anime Card Clash. Until this game has stronger public data, use four checks: current income, mutation or trait value, upgrade cost, and replacement risk.',
          'Replacement risk is the part players skip. A card can be good now and still be a bad deep upgrade if your next pack tier will replace it quickly. Early accounts should upgrade enough to keep farming, then save bigger resource decisions for cards that survive more than one pack jump.',
        ],
        bullets: [
          'Income: does the card raise money right now?',
          'Mutation: does the boost change the decision?',
          'Cost: can upgrades pay back quickly?',
          'Replacement: will a new pack tier replace it soon?',
        ],
      },
      {
        heading: 'Mutated cards deserve a second look',
        paragraphs: [
          'The official game page highlights rare mutated cards with big boosts, so a mutation should always trigger a re-check. That does not mean every mutation is permanent. It means the card may beat its normal rarity or tier expectation.',
          'If a mutated card helps offline income, it becomes especially important because offline time compounds. Upgrade it enough to feel the difference, then re-evaluate after your next pack tier instead of locking into it forever.',
        ],
      },
      {
        heading: 'What would justify a full tier list later',
        paragraphs: [
          'A full Anime Card Farm tier list would become useful when the site has reliable card names, pack sources, mutation values, and upgrade economics for this exact Roblox game. That could come from official data, in-game testing, or a current community dataset with clear source confidence.',
          'Until then, this page is intentionally a watch guide. It captures the tier-list intent without publishing copied Anime Card Clash rankings or pretending thin data is complete.',
        ],
      },
    ],
    faq: [
      {
        question: 'Why is this not a normal S-tier list?',
        answer:
          'Because current public tier-list results mostly describe Anime Card Clash, not Anime Card Farm. A fake ranking would mislead players.',
      },
      {
        question: 'What makes a card worth upgrading?',
        answer:
          'A card is worth upgrading when it improves income, has useful mutation or trait value, costs a reasonable amount to improve, and will not be replaced immediately.',
      },
      {
        question: 'Will the site add a tier list later?',
        answer:
          'Yes, if reliable Anime Card Farm-specific card data becomes available from official, in-game, or well-cross-checked community sources.',
      },
    ],
  },
];

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

export const allCoreRoutes = [
  '/',
  '/codes',
  '/guides',
  '/packs',
  '/cards',
  '/mutations',
  '/download',
  '/discord',
  '/updates',
  '/disclaimer',
  ...guides.map((guide) => `/guides/${guide.slug}`),
];
