import { AdsterraAdFrame } from '@/components/ads/adsterra-ad';
import Container from '@/components/layout/container';
import { FaqSection } from '@/components/paintalbum/faq-section';
import { LastUpdated } from '@/components/paintalbum/last-updated';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  activeCodes,
  codeCheckSummary,
  expiredCodes,
  watchCodes,
} from '@/data/paintalbum/codes';
import { officialGameFacts } from '@/data/paintalbum/sources';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Paint an Album Codes - Active Status and Watchlist',
    description:
      'Paint an Album codes status for Roblox: no verified active codes, no confirmed code box, redeem safety, and wrong-game code-list warnings.',
    locale,
    pathname: '/codes',
    image: '/paintalbum/og-image.png',
  });
}

export default function CodesPage() {
  const faqs = [
    {
      question: 'Are there active Paint an Album codes?',
      answer:
        'No active Paint an Album codes are verified as of the current check.',
    },
    {
      question: 'Does Paint an Album have a code box?',
      answer:
        'No confirmed in-game code redemption box is documented in the sources reviewed.',
    },
    {
      question: 'Where should future codes be redeemed?',
      answer:
        'Redeem future codes only inside the official Paint an Album Roblox experience.',
    },
  ];
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <div className="bg-[#140F17] py-12 text-[#FFF8E8]">
      <JsonLd data={jsonLd} />
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#3ED7B5] text-[#140F17]">Roblox Codes</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Paint an Album Codes
          </h1>
          <p className="text-[#D8C7D8] text-lg leading-8">
            {codeCheckSummary.status} This page separates Paint an Album from
            other Roblox paint games so players do not waste time on copied
            rewards.
          </p>
          <LastUpdated date={codeCheckSummary.checkedAt} />
        </header>

        <AdsterraAdFrame
          slot="banner-728x90"
          className="rounded-lg border border-[#3B303F] bg-[#201824] py-4"
          label
        />

        <section className="rounded-lg border border-[#3B303F] bg-[#201824] p-6">
          <h2 className="font-display text-2xl font-bold">
            Current active codes
          </h2>
          <p className="mt-3 max-w-3xl text-[#D8C7D8] text-sm leading-7">
            Active verified Paint an Album codes: {activeCodes.length}. When a
            code is confirmed through the official game, the developer group, or
            reliable in-game testing for place ID{' '}
            {officialGameFacts.robloxPlaceId}, it belongs here.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button
              asChild
              className="bg-[#3ED7B5] text-[#140F17] hover:bg-[#74F0D8]"
            >
              <a
                href={officialGameFacts.officialRobloxUrl}
                target="_blank"
                rel="noreferrer"
              >
                Open Roblox
              </a>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/guides/codes-status-guide">
                Codes Guide
              </LocaleLink>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/guides/official-links-safety-guide">
                Safe Links
              </LocaleLink>
            </Button>
          </div>
        </section>

        <section className="rounded-lg border border-[#3B303F] bg-[#201824] shadow-sm">
          <div className="border-[#3B303F] border-b p-5">
            <h2 className="font-display text-2xl font-bold">
              Watchlist codes ({watchCodes.length})
            </h2>
          </div>
          {watchCodes.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] text-left text-sm">
                <thead className="bg-[#140F17] text-[#3ED7B5]">
                  <tr>
                    <th className="px-5 py-3">Code</th>
                    <th className="px-5 py-3">Reported reward</th>
                    <th className="px-5 py-3">Confidence</th>
                    <th className="px-5 py-3">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {watchCodes.map((item) => (
                    <tr key={item.code} className="border-[#3B303F] border-t">
                      <td className="px-5 py-4 font-mono font-bold">
                        {item.code}
                      </td>
                      <td className="px-5 py-4 text-[#D8C7D8]">
                        {item.reward}
                      </td>
                      <td className="px-5 py-4 text-[#D8C7D8]">
                        {item.confidence}
                      </td>
                      <td className="px-5 py-4 text-[#D8C7D8]">{item.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-6">
              <p className="max-w-3xl text-[#D8C7D8] text-sm leading-7">
                There are no watchlist strings yet because current evidence does
                not show a Paint an Album code system. Codes from Paint and
                Hide, Paint or Die, Paint To Hide, or other paint-named Roblox
                games are not listed here.
              </p>
            </div>
          )}
        </section>

        <section className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-lg border border-[#3B303F] bg-[#201824] p-6">
            <h2 className="font-display text-2xl font-bold">Expired codes</h2>
            <p className="mt-3 text-[#D8C7D8] text-sm leading-7">
              {expiredCodes.length === 0
                ? 'No expired Paint an Album codes are listed yet.'
                : `${expiredCodes.length} expired codes are tracked.`}
            </p>
          </div>
          <div className="rounded-lg border border-[#3B303F] bg-[#201824] p-6">
            <h2 className="font-display text-2xl font-bold">Sources checked</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {codeCheckSummary.sourcesChecked.map((source) => (
                <a
                  key={source.url}
                  href={source.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-[#3B303F] bg-[#140F17] px-3 py-2 font-medium text-[#D8C7D8] text-sm transition hover:border-[#3ED7B5] hover:text-[#3ED7B5]"
                >
                  {source.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqs} />
      </Container>
    </div>
  );
}
