import { AnimeCardFarmHomePage } from '@/components/animecardfarm/home-page';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;

  return constructMetadata({
    title: 'Anime Card Farm Wiki - Codes, Packs, Cards and Roblox Guide',
    description:
      'Anime Card Farm Wiki covers Roblox codes, packs, card upgrades, offline money, mutations, trait gems, Discord links, and safe official access.',
    locale,
    pathname: '',
    image: '/animecardfarm/og-image.jpg',
  });
}

export default function HomePage() {
  return <AnimeCardFarmHomePage />;
}
