import { PaintAlbumHomePage } from '@/components/paintalbum/home-page';
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
    title: 'Paint an Album Wiki - Roblox Album Cover Painting Guide',
    description:
      'Paint an Album Wiki covers Roblox album search, beginner painting routes, autosave, gamepasses, codes status, and safe official links.',
    locale,
    pathname: '',
    image: '/paintalbum/og-image.png',
  });
}

export default function HomePage() {
  return <PaintAlbumHomePage />;
}
