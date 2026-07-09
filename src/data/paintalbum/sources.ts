import type { DataSource } from './types';

export const CHECKED_AT = '2026-07-09';
export const OFFICIAL_CHECKED_AT = '2026-07-09';

export const officialGameFacts = {
  name: 'Paint an Album',
  siteName: 'Paint an Album Wiki',
  domain: 'https://www.paint-an-album.wiki',
  canonicalHost: 'www.paint-an-album.wiki',
  robloxPlaceId: '120154566897536',
  robloxUniverseId: '7037902226',
  creatorName: 'We the real devs.',
  creatorType: 'Roblox Group',
  creatorId: '887696253',
  genre: 'Roblox Party & Casual coloring and drawing',
  genrePrimary: 'Party & Casual',
  genreSecondary: 'Coloring & Drawing',
  status: 'Live Roblox experience',
  createdAt: '2025-01-05T03:07:06.643Z',
  updatedAt: '2026-07-06T07:38:09.8997495Z',
  maxPlayers: 4,
  activePlayersAtCheck: 2350,
  visitsAtCheck: 12939346,
  favoritesAtCheck: 81401,
  upVotesAtCheck: 26259,
  downVotesAtCheck: 4186,
  officialRobloxUrl:
    'https://www.roblox.com/games/120154566897536/Paint-an-Album',
  officialGroupUrl:
    'https://www.roblox.com/communities/887696253/We-the-real-devs',
  officialDescription:
    'A relaxed 4-player Roblox game where players recreate album covers block-by-block, search a live album-cover database, paint in real time with friends, and rely on autosave.',
};

export const siteDescription =
  'Paint an Album Wiki helps Roblox players choose albums, paint cleaner block covers, use autosave, compare gamepasses, and check code status.';

export const officialSources: DataSource[] = [
  {
    type: 'official',
    label: 'Paint an Album on Roblox',
    url: officialGameFacts.officialRobloxUrl,
    checkedAt: OFFICIAL_CHECKED_AT,
    confidence: 'high',
    note: 'Primary source for the game name, official description, 4-player lobby, live album search, autosave, and shutdown update wording.',
  },
  {
    type: 'roblox_api',
    label: 'Roblox universe API snapshot',
    url: `https://games.roblox.com/v1/games?universeIds=${officialGameFacts.robloxUniverseId}`,
    checkedAt: OFFICIAL_CHECKED_AT,
    confidence: 'high',
    note: 'Confirmed universe ID, place ID, creator group, created and updated timestamps, max players, Party & Casual genre, Coloring & Drawing subgenre, visits, favorites, and active players.',
  },
  {
    type: 'roblox_api',
    label: 'Roblox votes API snapshot',
    url: `https://games.roblox.com/v1/games/votes?universeIds=${officialGameFacts.robloxUniverseId}`,
    checkedAt: OFFICIAL_CHECKED_AT,
    confidence: 'high',
    note: 'Used for current upvote and downvote counts without relying on scraped page text.',
  },
  {
    type: 'official',
    label: 'We the real devs. Roblox community',
    url: officialGameFacts.officialGroupUrl,
    checkedAt: OFFICIAL_CHECKED_AT,
    confidence: 'medium',
    note: 'Roblox group API confirms the creator group name and owner data. Public social detail is thin, so this site avoids inventing Discord or update channels.',
  },
  {
    type: 'competitor',
    label: 'Earnaldo Paint an Album hub',
    url: 'https://earnaldo.com/blog/paint-an-album',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Competitor cluster confirms current search coverage around guide, codes, and comparison intent. Used for page breadth planning, not copied prose.',
  },
  {
    type: 'competitor',
    label: 'Earnaldo Paint an Album codes page',
    url: 'https://earnaldo.com/blog/paint-an-album-codes',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Competitor code page reports no confirmed code system. This site publishes a conservative code-watch page instead of fake active codes.',
  },
  {
    type: 'community',
    label: "Rolimon's Paint an Album stats",
    url: 'https://www.rolimons.com/game/120154566897536',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Useful third-party snapshot for public stats, max players, average playtime, known gamepasses, and no known badges. Official API remains the higher-confidence source.',
  },
  {
    type: 'youtube',
    label: 'Paint an Album YouTube results',
    url: 'https://www.youtube.com/results?search_query=Paint+an+Album+Roblox',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Current videos are mostly gameplay, timelapse, and casual painting sessions. They support guide ideas but do not prove hidden mechanics or codes.',
  },
];

export const officialQuickLinks = [
  {
    label: 'Roblox',
    href: officialGameFacts.officialRobloxUrl,
  },
  {
    label: 'Developer Group',
    href: officialGameFacts.officialGroupUrl,
  },
];
