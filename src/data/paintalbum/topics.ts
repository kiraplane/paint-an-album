import { CHECKED_AT, OFFICIAL_CHECKED_AT, officialGameFacts } from './sources';
import type { TopicPage } from './types';

const commonImage = '/paintalbum/hero.png';
const iconImage = '/paintalbum/icon.png';

export const topicPages: Record<string, TopicPage> = {
  howToPlay: {
    route: '/how-to-play',
    label: 'How to Play',
    eyebrow: 'First Session',
    title: 'How to Play Paint an Album',
    seoTitle: 'How to Play Paint an Album - Roblox Album Painting Guide',
    seoDescription:
      'Learn Paint an Album basics: claim a plot, search album covers, paint block-by-block, use autosave, and build cleaner Roblox cover art.',
    summary:
      'Paint an Album is a relaxed Roblox creative game about turning album covers into block art. Start here before choosing a difficult cover.',
    image: commonImage,
    updatedAt: CHECKED_AT,
    featuredRoutes: [
      '/guides/beginner-guide',
      '/guides/clean-album-cover-painting-guide',
      '/guides/multiplayer-lobby-autosave-guide',
    ],
    sections: [
      {
        heading: 'The core loop is creative and slow on purpose',
        paragraphs: [
          'Paint an Album starts with a simple loop: claim a plot, search for an album cover, load the reference, then paint it block-by-block. The game is not asking you to grind stats or win rounds. It is asking you to translate art into a readable grid.',
          'That changes the best beginner advice. The smartest first move is not speed. It is choosing a reference that will still look good after simplification.',
        ],
      },
      {
        heading: 'Use the four-player lobby as a shared studio',
        paragraphs: [
          'The official Roblox description says the lobby has four plots and lets players paint alongside friends in real time. Treat that like a small studio. Everyone can work on separate covers, compare progress, and give readability feedback.',
          'If you are playing with friends, choose a theme before starting. Four covers from the same artist, genre, or decade make the room feel more intentional.',
        ],
      },
      {
        heading: 'Autosave lets you build bigger covers',
        paragraphs: [
          'Autosave is central to the experience because album covers can take longer than one short Roblox session. Build in passes: large shapes first, then shadows, then details, then cleanup. Leaving after a good pass is usually better than rushing a tired final section.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is Paint an Album a drawing game?',
        answer:
          'Yes. Roblox classifies it under Party & Casual with a Coloring & Drawing subgenre, and the official description focuses on recreating album covers block-by-block.',
      },
      {
        question: 'What should a new player do first?',
        answer:
          'Claim a plot, pick a simple high-contrast cover, block in the background and main shape, then save details for the final pass.',
      },
    ],
  },
  albumSearch: {
    route: '/album-search',
    label: 'Album Search',
    eyebrow: 'Live Database',
    title: 'Paint an Album Search and Cover Ideas',
    seoTitle: 'Paint an Album Search - Live Database and Cover Ideas',
    seoDescription:
      'Use Paint an Album search to find readable album covers, choose beginner-friendly ideas, and avoid references that become messy on a block grid.',
    summary:
      'The live album-cover database is the feature that makes the game flexible. This hub helps you pick references that actually paint well.',
    image: commonImage,
    updatedAt: CHECKED_AT,
    featuredRoutes: [
      '/guides/album-search-live-database-guide',
      '/guides/best-album-cover-ideas-guide',
      '/guides/color-matching-and-block-planning-guide',
    ],
    sections: [
      {
        heading: 'Search broad, then choose narrow',
        paragraphs: [
          'The official description says you can search a live database to load almost any album cover. Use that breadth for discovery, then choose narrowly based on readability. A famous cover is not always a good board project.',
          'Prefer covers with one focal point, strong contrast, and fewer small text elements. If the main subject is still recognizable when you squint, it is usually a better Paint an Album candidate.',
        ],
      },
      {
        heading: 'Alternate artwork can be the smarter pick',
        paragraphs: [
          'If a favorite album has a busy main cover, search for related singles, deluxe editions, or alternate art. You still get a meaningful music reference, but the build may be cleaner and more fun.',
          'This is especially useful for photo-heavy covers. A simpler alternate image can save an hour of fighting tiny details.',
        ],
      },
      {
        heading: 'Record the useful album fields before painting',
        paragraphs: [
          'For repeatable searches, keep the artist, album title, release year, edition, dominant colors, text density, and composition difficulty together. Edition matters because deluxe and remastered covers can return different art for the same album name.',
          'A practical difficulty note should describe the image: easy for large shapes and two or three colors, medium for layered silhouettes, and hard for faces, gradients, or dense typography. That turns the search result into a painting decision instead of a thumbnail gallery.',
        ],
        bullets: [
          'Artist and exact album title',
          'Release year or edition when search results conflict',
          'Dominant palette and background color',
          'Text density and smallest important detail',
          'Suggested plot size and estimated difficulty',
        ],
      },
    ],
    faq: [
      {
        question: 'What makes a good Paint an Album idea?',
        answer:
          'A limited palette, bold silhouette, high contrast, and minimal tiny text make an album cover easier to paint.',
      },
      {
        question: 'Can I paint any artist?',
        answer:
          'The official description says the game searches a live database for almost any album cover, but availability can still vary by search result.',
      },
    ],
  },
  mapAndPlots: {
    route: '/map-and-plots',
    label: 'Map and Plots',
    eyebrow: 'Lobby Navigation',
    title: 'Paint an Album Map and Lobby Plots',
    seoTitle: 'Paint an Album Map - Lobby Plots, Painting Areas and New Map',
    seoDescription:
      'Navigate the Paint an Album map, claim one of four lobby plots, find painting and gallery areas, and handle plot or autosave issues after the New Map update.',
    summary:
      'Use the lobby as a short workflow: claim a free plot, load a reference, paint in passes, verify autosave, then move to the gallery or camera areas.',
    image: commonImage,
    updatedAt: CHECKED_AT,
    featuredRoutes: [
      '/how-to-play',
      '/album-search',
      '/guides/multiplayer-lobby-autosave-guide',
    ],
    sections: [
      {
        heading: 'Claim one of the four lobby plots',
        paragraphs: [
          'Current competitor and gameplay references consistently show four paint plots in the shared lobby. Walk to an unclaimed station and use its prompt before loading an album so another player does not take the space while you browse.',
          'In a full server, join a new public server instead of painting over another player\'s area. For co-op, agree which plot owns the reference and which players handle background, silhouette, color matching, and details.',
        ],
      },
      {
        heading: 'A route through the New Map',
        paragraphs: [
          'Start at spawn, identify the four plot stations, then locate album search, painting tools, gallery or sharing space, and camera controls. The New Map label confirms a layout change, so older videos should be used for mechanics rather than exact walking directions.',
        ],
        bullets: [
          'Claim a plot before opening a long album search.',
          'Load the reference and confirm it belongs to your plot.',
          'Block the background before crossing the lobby for tools or photos.',
          'Verify the save indicator before leaving or switching servers.',
        ],
      },
      {
        heading: 'Fix missing plots or stale layouts',
        paragraphs: [
          'If the map does not match current screenshots, finish or save the active painting, then rejoin a fresh server. Roblox servers can remain on an older build for a short time after an update.',
          'If a plot prompt fails, move away, reset once, and test an empty plot. Do not use scripts to force ownership or duplicate another player\'s canvas.',
        ],
      },
    ],
    faq: [
      {
        question: 'How many plots are in the Paint an Album lobby?',
        answer:
          'Current map references show four lobby paint plots, so a full server may require joining another lobby.',
      },
      {
        question: 'Why does my lobby look different from a video?',
        answer:
          'The game has a New Map update and old servers or older videos may show a previous layout. Rejoin and follow current in-game labels.',
      },
    ],
  },
  tools: {
    route: '/tools',
    label: 'Tools',
    eyebrow: 'Painting Workflow',
    title: 'Paint an Album Tools and Painting Workflow',
    seoTitle: 'Paint an Album Tools - Painting, Hints, Camera and Workflow',
    seoDescription:
      'Use Paint an Album tools and workflow better with block planning, color cleanup, hints, camera habits, and safe expectations for gamepasses.',
    summary:
      'Paint an Album is simple on the surface, but cleaner covers come from using tools and passes in the right order.',
    image: commonImage,
    updatedAt: CHECKED_AT,
    featuredRoutes: [
      '/guides/clean-album-cover-painting-guide',
      '/guides/color-matching-and-block-planning-guide',
      '/guides/gallery-camera-sharing-guide',
    ],
    sections: [
      {
        heading: 'Your main tool is the order of work',
        paragraphs: [
          'Even before thinking about gamepasses, the strongest tool is a good painting order. Fill big areas, protect the main silhouette, then refine. That order prevents repeated repainting.',
          'Use cleanup passes. One pass for background, one for subject shape, one for shadows, one for highlights, and one for stray-block cleanup keeps the build controlled.',
        ],
      },
      {
        heading: 'Hints and camera should support judgment',
        paragraphs: [
          'Hints can help when a reference is hard to read, and camera or gallery habits help you judge a finished board. Use both as support, not replacement. The final decision should be whether the cover is recognizable and clean.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the best Paint an Album tool?',
        answer:
          'For most players, planning color zones before painting details is more important than any paid tool.',
      },
      {
        question: 'Should I use hints constantly?',
        answer:
          'Use hints to confirm confusing areas, but rely on contrast and shape planning for the main build.',
      },
    ],
  },
  gamepasses: {
    route: '/gamepasses',
    label: 'Gamepasses',
    eyebrow: 'Robux Decisions',
    title: 'Paint an Album Gamepasses',
    seoTitle: 'Paint an Album Gamepasses - Paint Roller and No Hint Cooldown',
    seoDescription:
      'Compare Paint an Album gamepasses, including Paint Roller and No Hint Cooldown, with safe Robux spending advice and player-fit recommendations.',
    summary:
      'Gamepasses should save time or reduce friction. They are not required to enjoy the core album-painting loop.',
    image: iconImage,
    updatedAt: CHECKED_AT,
    featuredRoutes: [
      '/guides/gamepasses-paint-roller-no-hint-cooldown-guide',
      '/guides/clean-album-cover-painting-guide',
      '/guides/official-links-safety-guide',
    ],
    sections: [
      {
        heading: 'Treat gamepasses as comfort purchases',
        paragraphs: [
          'Current third-party stats list Paint Roller and No Hint Cooldown as known gamepasses. The names point toward convenience, but players should check the live Roblox Store text before spending because gamepass behavior can change.',
          'A pass is worth buying only if it solves a problem you repeatedly feel. If your main issue is choosing colors, a faster tool may not help as much as a better plan.',
        ],
      },
      {
        heading: 'Keep all Robux spending inside Roblox',
        paragraphs: [
          'Do not use third-party discount pages, browser forms, or account-link offers for Paint an Album items. If you buy anything, use the official Roblox flow from the game page or in-game Store.',
        ],
      },
    ],
    faq: [
      {
        question: 'Does Paint an Album require Robux?',
        answer:
          'No. The official gameplay loop is based on claiming a plot, searching album covers, painting, and autosave.',
      },
      {
        question: 'Which Paint an Album gamepass should I buy first?',
        answer:
          'Only buy after playing enough to know your bottleneck. Paint Roller sounds more useful for large fills, while No Hint Cooldown sounds more useful for players who rely on hints.',
      },
    ],
  },
  download: {
    route: '/download',
    label: 'Roblox',
    eyebrow: 'Official Access',
    title: 'Paint an Album Roblox Page and Safe Links',
    seoTitle: 'Paint an Album Roblox - Official Game Page and Safe Links',
    seoDescription:
      'Open Paint an Album through the official Roblox page, verify place ID 120154566897536, creator We the real devs., and avoid fake code pages.',
    summary:
      'Use the official Roblox page as the source of truth. Paint an Album is place ID 120154566897536 and universe ID 7037902226.',
    image: iconImage,
    updatedAt: OFFICIAL_CHECKED_AT,
    featuredRoutes: [
      '/guides/beginner-guide',
      '/guides/official-links-safety-guide',
      '/codes',
    ],
    sections: [
      {
        heading: 'Verify the correct Roblox page first',
        paragraphs: [
          `The verified target is ${officialGameFacts.officialRobloxUrl}. Roblox API data reports universe ID ${officialGameFacts.robloxUniverseId}, creator ${officialGameFacts.creatorName}, max players ${officialGameFacts.maxPlayers}, and the Coloring & Drawing subgenre.`,
          'This site uses those identifiers to avoid mixing Paint an Album with other paint-named Roblox games.',
        ],
      },
      {
        heading: 'Avoid unsafe downloads and fake rewards',
        paragraphs: [
          'Paint an Album is a Roblox experience. You should not need APK mirrors, script executors, account services, or browser reward forms to play it. Open the official game, keep purchases inside Roblox, and treat outside code claims carefully.',
        ],
      },
    ],
    faq: [
      {
        question: 'Who made Paint an Album?',
        answer:
          'Roblox API data lists the creator as the group We the real devs.',
      },
      {
        question: 'Is this site official?',
        answer:
          'No. It is an independent guide hub and does not represent Roblox or the developer group.',
      },
    ],
  },
  updates: {
    route: '/updates',
    label: 'Updates',
    eyebrow: 'Live Status',
    title: 'Paint an Album Updates and Source Check Log',
    seoTitle: 'Paint an Album Updates - Roblox Version and Guide Checks',
    seoDescription:
      'Track Paint an Album update signals, Roblox API timestamps, code status, guide changes, gamepasses, and source confidence.',
    summary:
      'Paint an Album is moving quickly, so this page records what was checked and which topics should stay conservative.',
    image: commonImage,
    updatedAt: CHECKED_AT,
    featuredRoutes: [
      '/codes',
      '/gamepasses',
      '/guides/official-links-safety-guide',
    ],
    sections: [
      {
        heading: 'Official Roblox update signal',
        paragraphs: [
          `Roblox API data checked on ${OFFICIAL_CHECKED_AT} reports Paint an Album was created on ${officialGameFacts.createdAt} and last updated on ${officialGameFacts.updatedAt}. The public description also says shutdown equals update.`,
          'Because detailed patch notes are not public in the checked data, this site only treats new mechanics as stable after official page data, in-game review, or reliable current player evidence supports them.',
        ],
      },
      {
        heading: 'Current watch areas',
        paragraphs: [
          'Codes are the biggest watch area because search results around Roblox paint games can mix multiple experiences. Gamepass behavior is another watch area because third-party listings show pass names but not enough official detail to describe every effect confidently.',
        ],
      },
      {
        heading: 'New Map coverage',
        paragraphs: [
          'The current Roblox title and competitor coverage identify a New Map update. The map-and-plots page now tracks the four lobby plots, current navigation workflow, stale-server checks, and the safest way to verify that autosave completed before leaving.',
          'Until official patch notes publish a full room-by-room changelog, this site will describe only visible layout and workflow changes that can be reproduced in current gameplay.',
        ],
      },
    ],
    faq: [
      {
        question: 'How often should Paint an Album codes be rechecked?',
        answer:
          'Codes should be rechecked after visible updates, developer announcements, or reliable in-game evidence of a code box.',
      },
      {
        question: 'Why are some details conservative?',
        answer:
          'The game has thin public documentation. Conservative pages avoid turning rumors into player-facing facts.',
      },
    ],
  },
};

export const topicPageList = Object.values(topicPages);

export function getTopicPage(key: keyof typeof topicPages) {
  return topicPages[key];
}
