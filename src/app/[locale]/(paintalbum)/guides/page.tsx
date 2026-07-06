import { AdsterraAdFrame } from '@/components/ads/adsterra-ad';
import Container from '@/components/layout/container';
import { FaqSection } from '@/components/paintalbum/faq-section';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { guideCategoryIntro, guides } from '@/data/paintalbum/guides';
import { officialGameFacts } from '@/data/paintalbum/sources';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import Image from 'next/image';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Paint an Album Guides - Search, Painting, Codes and Gamepasses',
    description:
      'Read Paint an Album guides for Roblox album search, clean cover painting, multiplayer autosave, gamepasses, codes status, ideas, and safe links.',
    locale,
    pathname: '/guides',
    image: '/paintalbum/og-image.png',
  });
}

export default function GuidesPage() {
  const categories = Array.from(new Set(guides.map((guide) => guide.category)));
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Paint an Album Guides',
    itemListElement: guides.map((guide, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `${officialGameFacts.domain}/guides/${guide.slug}`,
      name: guide.title,
    })),
  };

  return (
    <div className="bg-[#140F17] py-12 text-[#FFF8E8]">
      <JsonLd data={jsonLd} />
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#3ED7B5] text-[#140F17]">Guides</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Paint an Album Guides
          </h1>
          <p className="text-[#D8C7D8] text-lg leading-8">
            Decision-first Roblox guides for album search, first-cover planning,
            clean block painting, multiplayer autosave, gamepasses, codes
            status, official links, and avoiding wrong-game advice.
          </p>
        </header>

        <AdsterraAdFrame
          slot="banner-728x90"
          className="rounded-lg border border-[#3B303F] bg-[#201824] py-4"
          label
        />

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category}
              className="rounded-lg border border-[#3B303F] bg-[#201824] p-5"
            >
              <h2 className="font-display text-xl font-bold">{category}</h2>
              <p className="mt-2 text-[#D8C7D8] text-sm leading-6">
                {guideCategoryIntro[category]}
              </p>
            </div>
          ))}
        </section>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {guides.map((guide) => (
            <article
              key={guide.slug}
              className="overflow-hidden rounded-lg border border-[#3B303F] bg-[#201824]"
            >
              <div className="relative aspect-video border-[#3B303F] border-b">
                <Image
                  src={guide.coverImageUrl}
                  alt={`${guide.title} cover`}
                  fill
                  sizes="(min-width: 1280px) 400px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#140F17]/80 to-transparent" />
                <Badge className="absolute top-4 left-4 bg-[#F7D154] text-[#140F17]">
                  {guide.category}
                </Badge>
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="outline"
                    className="border-[#3B303F] text-[#D8C7D8]"
                  >
                    {guide.difficulty}
                  </Badge>
                  {guide.tags.slice(0, 2).map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="border-[#3B303F] text-[#D8C7D8]"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h2 className="mt-4 font-display text-2xl font-bold">
                  {guide.title}
                </h2>
                <p className="mt-3 line-clamp-3 text-[#D8C7D8] text-sm leading-6">
                  {guide.summary}
                </p>
                <Button
                  asChild
                  className="mt-5 bg-[#3ED7B5] text-[#140F17] hover:bg-[#74F0D8]"
                >
                  <LocaleLink href={`/guides/${guide.slug}`}>
                    Read guide
                  </LocaleLink>
                </Button>
              </div>
            </article>
          ))}
        </div>

        <FaqSection
          items={[
            {
              question: 'Which Paint an Album guide should I read first?',
              answer:
                'Start with the beginner guide, then read album search, cover ideas, clean painting, multiplayer autosave, and codes status.',
            },
            {
              question: 'Why is there no tier list page?',
              answer:
                'Paint an Album is a creative album-cover painting game. There are no ranked units or builds that would make a real tier list useful.',
            },
            {
              question: 'Are guide facts official?',
              answer:
                'Official facts come from Roblox and Roblox API data. Codes, gamepasses, and strategy notes are cross-checked from current public sources and marked conservatively.',
            },
          ]}
        />
      </Container>
    </div>
  );
}
