import Container from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
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
    title: 'Paint an Album Wiki Disclaimer',
    description:
      'Paint an Album Wiki disclaimer covering independent guide status, Roblox source handling, codes, gamepasses, album search, and wrong-game safety.',
    locale,
    pathname: '/disclaimer',
    image: '/paintalbum/og-image.png',
  });
}

export default function DisclaimerPage() {
  return (
    <div className="bg-[#140F17] py-12 text-[#FFF8E8]">
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#3ED7B5] text-[#140F17]">Disclaimer</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Paint an Album Wiki Disclaimer
          </h1>
          <p className="text-[#D8C7D8] text-lg leading-8">
            Paint an Album Wiki is an independent guide site for Roblox players.
            It is not created, endorsed, sponsored, or operated by Roblox,
            {` ${officialGameFacts.creatorName}`}, or the Paint an Album
            developer team.
          </p>
        </header>

        <section className="rounded-lg border border-[#3B303F] bg-[#201824] p-6 text-[#D8C7D8] leading-8">
          <h2 className="font-display text-2xl font-bold text-[#FFF8E8]">
            Source handling
          </h2>
          <p className="mt-3">
            Official facts come from the Roblox game page, the developer group,
            and Roblox API snapshots. Album search behavior, gamepasses, UI
            labels, and painting workflow notes are cross-checked from current
            public sources when available, but they can change after updates.
          </p>
          <h2 className="mt-8 font-display text-2xl font-bold text-[#FFF8E8]">
            Codes and game changes
          </h2>
          <p className="mt-3">
            Paint an Album can change without notice. Codes can appear or
            expire, UI labels can move, and community notes can become outdated.
            The codes page does not list rewards from other paint-named Roblox
            games unless they are verified inside Paint an Album.
          </p>
          <h2 className="mt-8 font-display text-2xl font-bold text-[#FFF8E8]">
            Safety boundary
          </h2>
          <p className="mt-3">
            This site does not provide scripts, exploits, modified clients, APK
            mirrors, private-server instructions, or account-risk shortcuts. It
            also avoids importing Paint To Hide, Paint and Hide, Paint or Die,
            or other Roblox paint-game facts into Paint an Album pages unless
            sources clearly match this exact experience.
          </p>
        </section>

        <div className="flex flex-wrap gap-3">
          <Button
            asChild
            className="bg-[#3ED7B5] text-[#140F17] hover:bg-[#74F0D8]"
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
