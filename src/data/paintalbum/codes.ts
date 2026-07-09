import { officialGameFacts } from './sources';
import type { GameCode } from './types';

export const CODE_CHECKED_AT = '2026-07-09';

export const activeCodes: GameCode[] = [];

export const watchCodes: GameCode[] = [];

export const expiredCodes: GameCode[] = [];

export const codeCheckSummary = {
  checkedAt: CODE_CHECKED_AT,
  status:
    'No active Paint an Album codes are verified, and no confirmed in-game code redemption box is documented as of this check.',
  sourcesChecked: [
    {
      label: 'Roblox game page',
      url: officialGameFacts.officialRobloxUrl,
    },
    {
      label: 'Developer group',
      url: officialGameFacts.officialGroupUrl,
    },
    {
      label: 'Roblox universe API',
      url: `https://games.roblox.com/v1/games?universeIds=${officialGameFacts.robloxUniverseId}`,
    },
    {
      label: 'Earnaldo codes status',
      url: 'https://earnaldo.com/blog/paint-an-album-codes',
    },
    {
      label: 'YouTube search results',
      url: 'https://www.youtube.com/results?search_query=Paint+an+Album+codes',
    },
  ],
};
