import { AdsterraAdFrame } from '@/components/ads/adsterra-ad';
import { FaqSection } from '@/components/animecardfarm/faq-section';
import { LastUpdated } from '@/components/animecardfarm/last-updated';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { relatedRouteLabels } from '@/data/animecardfarm/guides';
import { officialGameFacts } from '@/data/animecardfarm/sources';
import type { TopicPage as TopicPageData } from '@/data/animecardfarm/types';
import { LocaleLink } from '@/i18n/navigation';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

function getRelatedRouteLabel(route: string) {
  return relatedRouteLabels[route] ?? (route.replace(/^\/+/, '') || 'Home');
}

export function TopicPage({ topic }: { topic: TopicPageData }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: topic.title,
    description: topic.summary,
    dateModified: topic.updatedAt,
    image: `${officialGameFacts.domain}${topic.image}`,
    mainEntityOfPage: `${officialGameFacts.domain}${topic.route}`,
  };

  return (
    <div className="bg-[#080D17] py-12 text-[#F6FBFF]">
      <JsonLd data={jsonLd} />
      <Container className="space-y-8 px-4">
        <header className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="max-w-3xl space-y-4">
            <Badge className="bg-[#67F7D3] text-[#07101C]">
              {topic.eyebrow}
            </Badge>
            <h1 className="font-display text-4xl font-black md:text-6xl">
              {topic.title}
            </h1>
            <p className="text-[#B8C8D8] text-lg leading-8">{topic.summary}</p>
            <LastUpdated date={topic.updatedAt} />
          </div>
          <div className="relative aspect-video overflow-hidden rounded-lg border border-[#27415F] bg-[#101827]">
            <Image
              src={topic.image}
              alt={`${topic.title} artwork`}
              fill
              sizes="(min-width: 1024px) 360px, 100vw"
              className="object-cover"
            />
          </div>
        </header>

        <AdsterraAdFrame
          slot="banner-728x90"
          className="rounded-lg border border-[#27415F] bg-[#101827] py-4"
          label
        />

        <section className="grid gap-4 md:grid-cols-3">
          {topic.featuredRoutes.map((route) => (
            <LocaleLink
              key={route}
              href={route}
              className="group rounded-lg border border-[#27415F] bg-[#101827] p-5 transition hover:border-[#67F7D3]"
            >
              <div className="flex items-center justify-between gap-3">
                <h2 className="font-display text-xl font-bold text-[#FFF6D6]">
                  {getRelatedRouteLabel(route)}
                </h2>
                <ArrowRight className="size-4 shrink-0 text-[#FFD35C] transition group-hover:translate-x-0.5" />
              </div>
              <p className="mt-3 text-[#B8C8D8] text-sm leading-6">
                Continue through this route when the current page matches your
                next farm decision.
              </p>
            </LocaleLink>
          ))}
        </section>

        <article className="rounded-lg border border-[#27415F] bg-[#101827] p-6 md:p-8">
          <div className="space-y-8">
            {topic.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-display text-2xl font-bold">
                  {section.heading}
                </h2>
                <div className="mt-3 space-y-4 text-[#B8C8D8] text-base leading-8">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.bullets ? (
                  <ul className="mt-4 space-y-2 text-[#B8C8D8] text-sm leading-7">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>- {bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button
              asChild
              className="bg-[#67F7D3] text-[#07101C] hover:bg-[#9DFFE9]"
            >
              <LocaleLink href="/guides">All Guides</LocaleLink>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-[#FFD35C] bg-[#080D17] text-[#FFF6D6] hover:bg-[#FFD35C] hover:text-[#07101C]"
            >
              <LocaleLink href="/codes">Check Codes</LocaleLink>
            </Button>
          </div>
        </article>

        <FaqSection items={topic.faq} />
      </Container>
    </div>
  );
}
