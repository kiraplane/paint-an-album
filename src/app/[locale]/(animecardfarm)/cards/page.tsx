import { TopicPage } from '@/components/animecardfarm/topic-page';
import { getTopicPage } from '@/data/animecardfarm/topics';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const topic = getTopicPage('cards');

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: topic.seoTitle,
    description: topic.seoDescription,
    locale,
    pathname: topic.route,
    image: '/animecardfarm/og-image.jpg',
  });
}

export default function CardsPage() {
  return <TopicPage topic={topic} />;
}
