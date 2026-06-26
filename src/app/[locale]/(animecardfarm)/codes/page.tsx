import { AdsterraAdFrame } from '@/components/ads/adsterra-ad';
import { CodeCopyButton } from '@/components/animecardfarm/code-copy-button';
import { FaqSection } from '@/components/animecardfarm/faq-section';
import { LastUpdated } from '@/components/animecardfarm/last-updated';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  activeCodes,
  codeCheckSummary,
  expiredCodes,
  watchCodes,
} from '@/data/animecardfarm/codes';
import { officialGameFacts } from '@/data/animecardfarm/sources';
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
    title: 'Anime Card Farm Codes - Active Roblox Codes and Rewards',
    description:
      'Source-checked Anime Card Farm codes for Roblox, including POTIONS, TRAITS spelling notes, rewards, redeem steps, and failed-code fixes.',
    locale,
    pathname: '/codes',
    image: '/animecardfarm/og-image.jpg',
  });
}

export default function CodesPage() {
  const faqs = [
    {
      question: 'Are Anime Card Farm codes game-tested here?',
      answer:
        'No. Codes are source-checked from current public sources, but this site did not redeem them inside Roblox.',
    },
    {
      question: 'Where should I redeem Anime Card Farm codes?',
      answer:
        'Redeem codes inside the official Anime Card Farm Roblox experience, usually through the in-game Shop or code panel.',
    },
    {
      question: 'Why is TRAITS listed with medium confidence?',
      answer:
        'Most current sources list TRAITS!, while some list TRAIT!. This page tracks the conflict instead of treating both spellings as equally verified.',
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
    <div className="bg-[#080D17] py-12 text-[#F6FBFF]">
      <JsonLd data={jsonLd} />
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#67F7D3] text-[#07101C]">Roblox Codes</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Anime Card Farm Codes
          </h1>
          <p className="text-[#B8C8D8] text-lg leading-8">
            {codeCheckSummary.status} Copy codes exactly, redeem them inside the
            official Roblox game, and spend potions or trait gems on a real pack
            or upgrade plan.
          </p>
          <LastUpdated date={codeCheckSummary.checkedAt} />
        </header>

        <AdsterraAdFrame
          slot="banner-728x90"
          className="rounded-lg border border-[#27415F] bg-[#101827] py-4"
          label
        />

        <section className="rounded-lg border border-[#27415F] bg-[#101827] p-6">
          <h2 className="font-display text-2xl font-bold">
            Redeem active codes before a focused session
          </h2>
          <p className="mt-3 max-w-3xl text-[#B8C8D8] text-sm leading-7">
            The useful sequence is simple: open the official Roblox experience,
            redeem codes, decide whether the reward supports packs, mutations,
            or trait work, then spend during active play rather than right
            before logging off.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button
              asChild
              className="bg-[#67F7D3] text-[#07101C] hover:bg-[#9DFFE9]"
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
              <LocaleLink href="/guides/codes-redeem-guide">
                Redeem Guide
              </LocaleLink>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/guides/wrong-game-codes-guide">
                Avoid Wrong Codes
              </LocaleLink>
            </Button>
          </div>
        </section>

        <section className="rounded-lg border border-[#27415F] bg-[#101827] shadow-sm">
          <div className="border-[#27415F] border-b p-5">
            <h2 className="font-display text-2xl font-bold">
              Active / reported active codes ({activeCodes.length})
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[920px] text-left text-sm">
              <thead className="bg-[#080D17] text-[#67F7D3]">
                <tr>
                  <th className="px-5 py-3">Code</th>
                  <th className="px-5 py-3">Reward</th>
                  <th className="px-5 py-3">Confidence</th>
                  <th className="px-5 py-3">Notes</th>
                  <th className="px-5 py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {activeCodes.map((item) => (
                  <tr key={item.code} className="border-[#27415F] border-t">
                    <td className="px-5 py-4 font-mono font-bold">
                      {item.code}
                    </td>
                    <td className="px-5 py-4 text-[#B8C8D8]">{item.reward}</td>
                    <td className="px-5 py-4 text-[#B8C8D8]">
                      {item.confidence}
                    </td>
                    <td className="px-5 py-4 text-[#B8C8D8]">{item.notes}</td>
                    <td className="px-5 py-4">
                      <CodeCopyButton code={item.code} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-lg border border-[#27415F] bg-[#101827] p-6">
            <h2 className="font-display text-2xl font-bold">Watchlist</h2>
            <div className="mt-4 space-y-3">
              {watchCodes.map((item) => (
                <div
                  key={item.code}
                  className="rounded-md border border-[#27415F] bg-[#080D17] p-4"
                >
                  <p className="font-semibold text-[#FFF6D6]">{item.code}</p>
                  <p className="mt-2 text-[#B8C8D8] text-sm leading-6">
                    {item.notes}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-[#27415F] bg-[#101827] p-6">
            <h2 className="font-display text-2xl font-bold">Expired codes</h2>
            <p className="mt-3 text-[#B8C8D8] text-sm leading-7">
              {expiredCodes.length === 0
                ? 'No expired Anime Card Farm codes are listed yet.'
                : `${expiredCodes.length} expired codes are tracked.`}
            </p>
            <h3 className="mt-6 font-display text-lg font-bold">
              Sources checked
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {codeCheckSummary.sourcesChecked.map((source) => (
                <a
                  key={source.url}
                  href={source.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-[#27415F] bg-[#080D17] px-3 py-2 font-medium text-[#B8C8D8] text-sm transition hover:border-[#67F7D3] hover:text-[#67F7D3]"
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
