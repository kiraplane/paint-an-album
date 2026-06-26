'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';
import {
  BookOpen,
  Download,
  Gem,
  Layers3,
  RadioTower,
  Sparkles,
  TimerReset,
} from 'lucide-react';
import { useTranslations } from 'next-intl';

export function useNavbarLinks(): NestedMenuItem[] {
  const t = useTranslations('Marketing.navbar');

  return [
    {
      title: t('guides.title'),
      href: Routes.Guides,
      external: false,
      icon: <BookOpen className="size-4" />,
      items: [
        {
          title: 'All Guides',
          description: 'Beginner, codes, packs, offline money, and traits.',
          href: Routes.Guides,
          external: false,
          icon: <BookOpen className="size-4" />,
        },
        {
          title: 'Beginner Guide',
          description: 'First route for packs, upgrades, codes, and income.',
          href: Routes.BeginnerGuide,
          external: false,
          icon: <Sparkles className="size-4" />,
        },
        {
          title: 'Offline Money',
          description: 'Prepare your best money setup before leaving Roblox.',
          href: Routes.OfflineMoneyGuide,
          external: false,
          icon: <TimerReset className="size-4" />,
        },
        {
          title: 'Wrong-Game Safety',
          description: 'Keep Farm separate from Clash and Collection.',
          href: Routes.WrongGameGuide,
          external: false,
          icon: <RadioTower className="size-4" />,
        },
      ],
    },
    {
      title: t('packs.title'),
      href: Routes.Packs,
      external: false,
      icon: <Layers3 className="size-4" />,
      items: [
        {
          title: 'Packs',
          description: 'Pack tiers, upgrades, and spending route.',
          href: Routes.Packs,
          external: false,
          icon: <Layers3 className="size-4" />,
        },
        {
          title: 'Packs Guide',
          description: 'When to buy packs and when to upgrade.',
          href: Routes.PacksGuide,
          external: false,
          icon: <BookOpen className="size-4" />,
        },
      ],
    },
    {
      title: t('cards.title'),
      href: Routes.Cards,
      external: false,
      icon: <Layers3 className="size-4" />,
      items: [
        {
          title: 'Cards',
          description: 'Income, upgrade, and best-card signals.',
          href: Routes.Cards,
          external: false,
          icon: <Layers3 className="size-4" />,
        },
        {
          title: 'Best Cards Watch',
          description: 'Safe tier-list alternative for thin data.',
          href: Routes.BestCardsGuide,
          external: false,
          icon: <RadioTower className="size-4" />,
        },
        {
          title: 'Mutations',
          description: 'Traits, trait gems, and boosted cards.',
          href: Routes.Mutations,
          external: false,
          icon: <Gem className="size-4" />,
        },
      ],
    },
    {
      title: t('codes.title'),
      href: Routes.Codes,
      external: false,
      icon: <Sparkles className="size-4" />,
      items: [
        {
          title: 'Codes',
          description: 'POTIONS, TRAITS!, source checks, and rewards.',
          href: Routes.Codes,
          external: false,
          icon: <Sparkles className="size-4" />,
        },
        {
          title: 'Redeem Guide',
          description: 'Use codes safely inside the official game.',
          href: Routes.CodesGuide,
          external: false,
          icon: <BookOpen className="size-4" />,
        },
        {
          title: 'Updates',
          description: 'Roblox update signals and code freshness.',
          href: Routes.Updates,
          external: false,
          icon: <RadioTower className="size-4" />,
        },
      ],
    },
    {
      title: t('download.title'),
      href: Routes.Download,
      external: false,
      icon: <Download className="size-4" />,
      items: [
        {
          title: 'Official Roblox',
          description: 'Open the correct Anime Card Farm page.',
          href: Routes.Download,
          external: false,
          icon: <Download className="size-4" />,
        },
        {
          title: 'Discord',
          description: 'Group, Discord, and source-check safety.',
          href: Routes.Discord,
          external: false,
          icon: <RadioTower className="size-4" />,
        },
      ],
    },
  ];
}
