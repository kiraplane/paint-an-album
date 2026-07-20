import Container from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
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
    title: 'Paint an Album Discord - Community Status and Safe Links',
    description:
      'Check Paint an Album Discord status, use the verified Roblox experience, and avoid fake invites, scripts, free Robux, or account recovery links.',
    locale,
    pathname: '/discord',
    image: '/paintalbum/og-image.png',
  });
}

export default function DiscordPage() {
  return (
    <div className="bg-[#140F17] py-12 text-[#FFF8E8]">
      <Container className="space-y-8 px-4">
        <header className="max-w-4xl space-y-4">
          <Badge className="bg-[#F7D154] text-[#140F17]">
            Community status
          </Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Paint an Album Discord
          </h1>
          <p className="text-lg leading-8 text-[#D8C7D8]">
            No dedicated developer-owned Discord invite is independently
            verified here right now. Use this page to separate community
            discussion from fake reward, script, and account links.
          </p>
        </header>

        <section className="grid gap-5 md:grid-cols-2">
          <article className="rounded-lg border border-[#3B303F] bg-[#201824] p-6">
            <h2 className="font-display text-2xl font-bold">
              Verify the game first
            </h2>
            <p className="mt-3 leading-8 text-[#D8C7D8]">
              Open Paint an Album through the verified Roblox route and confirm
              the creator and place identity before trusting a community link.
              A Discord directory or video description is not identity proof.
            </p>
          </article>
          <article className="rounded-lg border border-[#3B303F] bg-[#201824] p-6">
            <h2 className="font-display text-2xl font-bold">
              Keep account details private
            </h2>
            <p className="mt-3 leading-8 text-[#D8C7D8]">
              Do not enter a Roblox password, cookie, recovery code, or browser
              permission into a Discord reward page. Paint an Album does not
              require executors, modified clients, or free-Robux forms.
            </p>
          </article>
        </section>

        <div className="flex flex-wrap gap-3">
          <Button asChild className="bg-[#3ED7B5] text-[#140F17]">
            <LocaleLink href="/download">Open verified Roblox route</LocaleLink>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-[#3B303F] bg-[#201824] text-[#FFF8E8]"
          >
            <LocaleLink href="/guides/community-status-safety-faq">
              Community safety FAQ
            </LocaleLink>
          </Button>
        </div>
      </Container>
    </div>
  );
}
