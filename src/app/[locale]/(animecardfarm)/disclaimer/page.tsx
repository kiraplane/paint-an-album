import Container from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
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
    title: 'Anime Card Farm Wiki Disclaimer',
    description:
      'Anime Card Farm Wiki disclaimer covering independent guide status, Roblox source handling, codes, mutations, and wrong-game safety.',
    locale,
    pathname: '/disclaimer',
    image: '/animecardfarm/og-image.jpg',
  });
}

export default function DisclaimerPage() {
  return (
    <div className="bg-[#080D17] py-12 text-[#F6FBFF]">
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#67F7D3] text-[#07101C]">Disclaimer</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Anime Card Farm Wiki Disclaimer
          </h1>
          <p className="text-[#B8C8D8] text-lg leading-8">
            Anime Card Farm Wiki is an independent guide site for Roblox
            players. It is not created, endorsed, or operated by Roblox, the
            group {officialGameFacts.creatorName}, or the Anime Card Farm
            developer team.
          </p>
        </header>

        <section className="rounded-lg border border-[#27415F] bg-[#101827] p-6 text-[#B8C8D8] leading-8">
          <h2 className="font-display text-2xl font-bold text-[#F6FBFF]">
            Source handling
          </h2>
          <p className="mt-3">
            Official facts come from the Roblox game page and Roblox API
            snapshots. Codes, mutation advice, and progression routes are
            cross-checked from current public sources when available, but the
            site does not claim every code or mechanic has been game-tested.
          </p>
          <h2 className="mt-8 font-display text-2xl font-bold text-[#F6FBFF]">
            Codes and game changes
          </h2>
          <p className="mt-3">
            Anime Card Farm can change without notice. Codes can expire, rewards
            can change, and Roblox UI labels can move after updates. Use the
            official Roblox experience and official community links when
            checking time-sensitive rewards.
          </p>
          <h2 className="mt-8 font-display text-2xl font-bold text-[#F6FBFF]">
            Safety boundary
          </h2>
          <p className="mt-3">
            This site does not provide scripts, exploits, modified clients, APK
            mirrors, private-server instructions, or account-risk shortcuts. It
            also avoids copying Anime Card Clash or Anime Card Collection facts
            into Anime Card Farm pages unless sources clearly match this exact
            game.
          </p>
        </section>

        <div className="flex flex-wrap gap-3">
          <Button
            asChild
            className="bg-[#67F7D3] text-[#07101C] hover:bg-[#9DFFE9]"
          >
            <LocaleLink href="/guides/beginner-guide">Start Guide</LocaleLink>
          </Button>
          <Button asChild variant="outline">
            <LocaleLink href="/download">Official Links</LocaleLink>
          </Button>
        </div>
      </Container>
    </div>
  );
}
