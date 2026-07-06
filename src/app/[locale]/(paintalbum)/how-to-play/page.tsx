import { TopicPage } from '@/components/paintalbum/topic-page';
import { getTopicPage } from '@/data/paintalbum/topics';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const topic = getTopicPage('howToPlay');

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
    image: '/paintalbum/og-image.png',
  });
}

export default function HowToPlayPage() {
  return <TopicPage topic={topic} />;
}
