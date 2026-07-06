'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';
import {
  BookOpen,
  Brush,
  Camera,
  Gamepad2,
  Palette,
  RadioTower,
  Search,
  ShieldCheck,
  ShoppingBag,
  Users,
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
          description:
            'Beginner, album search, clean painting, autosave, codes, and safety.',
          href: Routes.Guides,
          external: false,
          icon: <BookOpen className="size-4" />,
        },
        {
          title: 'Beginner Guide',
          description:
            'Claim a plot, pick a readable cover, and finish your first board.',
          href: Routes.BeginnerGuide,
          external: false,
          icon: <Palette className="size-4" />,
        },
        {
          title: 'Clean Painting',
          description: 'Paint large shapes first and finish with cleanup.',
          href: Routes.CleanPaintingGuide,
          external: false,
          icon: <Brush className="size-4" />,
        },
      ],
    },
    {
      title: t('albumSearch.title'),
      href: Routes.AlbumSearch,
      external: false,
      icon: <Search className="size-4" />,
      items: [
        {
          title: 'Album Search',
          description:
            'Use the live database to load references that work on a grid.',
          href: Routes.AlbumSearch,
          external: false,
          icon: <Search className="size-4" />,
        },
        {
          title: 'Cover Ideas',
          description: 'Choose beginner-friendly covers with bold shapes.',
          href: Routes.CoverIdeasGuide,
          external: false,
          icon: <Palette className="size-4" />,
        },
        {
          title: 'Color Matching',
          description: 'Plan palettes, contrast, shadows, and block zones.',
          href: Routes.ColorPlanningGuide,
          external: false,
          icon: <Brush className="size-4" />,
        },
      ],
    },
    {
      title: t('painting.title'),
      href: Routes.Tools,
      external: false,
      icon: <Brush className="size-4" />,
      items: [
        {
          title: 'Tools',
          description: 'Painting workflow, hints, camera, and cleanup habits.',
          href: Routes.Tools,
          external: false,
          icon: <Brush className="size-4" />,
        },
        {
          title: 'Multiplayer',
          description: 'Use four plots, autosave, and friend feedback well.',
          href: Routes.MultiplayerGuide,
          external: false,
          icon: <Users className="size-4" />,
        },
        {
          title: 'Gallery',
          description: 'Frame screenshots and progress posts cleanly.',
          href: Routes.GalleryGuide,
          external: false,
          icon: <Camera className="size-4" />,
        },
      ],
    },
    {
      title: t('status.title'),
      href: Routes.Codes,
      external: false,
      icon: <RadioTower className="size-4" />,
      items: [
        {
          title: 'Codes Status',
          description: 'No active codes or confirmed code box are verified.',
          href: Routes.Codes,
          external: false,
          icon: <RadioTower className="size-4" />,
        },
        {
          title: 'Gamepasses',
          description: 'Paint Roller and No Hint Cooldown as comfort buys.',
          href: Routes.Gamepasses,
          external: false,
          icon: <ShoppingBag className="size-4" />,
        },
        {
          title: 'Official Roblox',
          description: 'Open the verified Paint an Album place.',
          href: Routes.Download,
          external: false,
          icon: <Gamepad2 className="size-4" />,
        },
        {
          title: 'Safety',
          description:
            'Avoid fake codes, scripts, clone games, and Robux pages.',
          href: Routes.SafetyGuide,
          external: false,
          icon: <ShieldCheck className="size-4" />,
        },
      ],
    },
  ];
}
