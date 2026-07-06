import Container from '@/components/layout/container';
import {
  PaintAlbumMobileMenu,
  PaintAlbumRouteSidebar,
} from '@/components/paintalbum/wiki-navigation';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { guides, siteDescription } from '@/data/paintalbum/guides';
import { officialGameFacts } from '@/data/paintalbum/sources';
import { topicPageList } from '@/data/paintalbum/topics';
import { LocaleLink } from '@/i18n/navigation';
import {
  ArrowRight,
  Brush,
  ExternalLink,
  Gamepad2,
  Images,
  Palette,
  Play,
  RadioTower,
  Search,
  Users,
} from 'lucide-react';
import Image from 'next/image';

const primaryLinks = [
  {
    title: 'Beginner Route',
    body: 'Claim a plot, choose a readable cover, and make the first board look clean.',
    href: '/guides/beginner-guide',
    icon: Palette,
  },
  {
    title: 'Album Search',
    body: 'Use the live database to find covers that survive the block grid.',
    href: '/album-search',
    icon: Search,
  },
  {
    title: 'Painting Workflow',
    body: 'Block large shapes first, control contrast, and finish with cleanup passes.',
    href: '/tools',
    icon: Brush,
  },
  {
    title: 'Multiplayer',
    body: 'Use the four-player lobby, autosave, and friend feedback without rushing.',
    href: '/guides/multiplayer-lobby-autosave-guide',
    icon: Users,
  },
  {
    title: 'Codes Status',
    body: 'No active codes or confirmed code box are verified for Paint an Album.',
    href: '/codes',
    icon: RadioTower,
  },
  {
    title: 'Official Roblox',
    body: 'Open the verified place ID 120154566897536 on Roblox.',
    href: '/download',
    icon: Gamepad2,
  },
];

const keywordLinks = [
  { keyword: 'paint an album', href: '/' },
  { keyword: 'paint an album Wiki', href: '/' },
  { keyword: 'paint an album codes', href: '/codes' },
  { keyword: 'paint an album Roblox', href: '/download' },
  { keyword: 'paint an album gamepasses', href: '/gamepasses' },
  { keyword: 'paint an album album search', href: '/album-search' },
  { keyword: 'paint an album how to play', href: '/how-to-play' },
  {
    keyword: 'paint an album multiplayer',
    href: '/guides/multiplayer-lobby-autosave-guide',
  },
];

const startSteps = [
  {
    title: 'Pick a readable cover',
    href: '/guides/best-album-cover-ideas-guide',
    body: 'Start with bold shapes, high contrast, and very little tiny text.',
  },
  {
    title: 'Load the reference',
    href: '/guides/album-search-live-database-guide',
    body: 'Search broadly, then choose a version that works on a block grid.',
  },
  {
    title: 'Paint in passes',
    href: '/guides/clean-album-cover-painting-guide',
    body: 'Background, silhouette, shadows, highlights, then cleanup.',
  },
  {
    title: 'Share or continue later',
    href: '/guides/gallery-camera-sharing-guide',
    body: 'Use autosave, camera habits, and progress shots to finish calmly.',
  },
];

const latestUpdateItems = [
  {
    title: 'Roblox API snapshot',
    date: officialGameFacts.updatedAt.slice(0, 10),
    body: `${officialGameFacts.name} is verified at place ${officialGameFacts.robloxPlaceId}, universe ${officialGameFacts.robloxUniverseId}, by ${officialGameFacts.creatorName}.`,
  },
  {
    title: 'Codes remain empty',
    date: '2026-07-06',
    body: 'No active Paint an Album codes or confirmed redemption menu are documented in the sources checked.',
  },
  {
    title: 'Gamepass notes are conservative',
    date: '2026-07-06',
    body: 'Paint Roller and No Hint Cooldown are covered as comfort purchases until live Store text gives stronger detail.',
  },
];

export function PaintAlbumHomePage() {
  const latestGuides = guides.slice(0, 6);
  const featuredVideo = guides.find((guide) => guide.video)?.video;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${officialGameFacts.domain}/#website`,
        name: officialGameFacts.siteName,
        url: officialGameFacts.domain,
        description: siteDescription,
      },
      {
        '@type': 'Organization',
        name: officialGameFacts.siteName,
        url: officialGameFacts.domain,
        logo: `${officialGameFacts.domain}/paintalbum/icon.png`,
      },
      {
        '@type': 'VideoGame',
        name: officialGameFacts.name,
        gamePlatform: ['Roblox'],
        applicationCategory: 'Game',
        genre: officialGameFacts.genre,
        url: officialGameFacts.officialRobloxUrl,
        publisher: {
          '@type': 'Organization',
          name: officialGameFacts.creatorName,
        },
      },
    ],
  };

  return (
    <div className="bg-[#140F17] text-[#FFF8E8]">
      <JsonLd data={jsonLd} />

      <section className="relative overflow-hidden border-[#3B303F] border-b">
        <Image
          src="/paintalbum/hero.png"
          alt="Paint an Album Roblox album cover painting preview"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,15,23,0.98)_0%,rgba(20,15,23,0.9)_42%,rgba(20,15,23,0.48)_72%,rgba(20,15,23,0.88)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#140F17] to-transparent" />

        <Container className="relative px-4 py-8 md:py-10 lg:py-12">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_360px] xl:grid-cols-[minmax(0,1fr)_420px]">
            <div className="max-w-3xl space-y-5">
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-[#F7D154] text-[#140F17]">
                  Roblox Coloring & Drawing
                </Badge>
                <Badge
                  variant="outline"
                  className="border-[#3ED7B5] bg-[#140F17]/80 text-[#D8FFF6]"
                >
                  Album Covers + Autosave
                </Badge>
              </div>
              <h1 className="font-display text-4xl font-black leading-tight sm:text-5xl md:text-7xl">
                Paint an Album Wiki
              </h1>
              <p className="max-w-2xl text-[#F7E8C6] text-lg leading-8 md:text-xl">
                Choose better album covers, use the live search database, paint
                cleaner block art, play with friends, and check code status
                without mixing in other Roblox paint games.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  className="bg-[#F76F5E] text-[#140F17] hover:bg-[#FF9B86]"
                >
                  <LocaleLink href="/guides/beginner-guide">
                    Start Guide
                    <ArrowRight className="size-4" />
                  </LocaleLink>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#3ED7B5] bg-[#140F17]/70 text-[#FFF8E8] hover:bg-[#3ED7B5] hover:text-[#140F17]"
                >
                  <LocaleLink href="/album-search">Album Search</LocaleLink>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#F7D154] bg-[#140F17]/70 text-[#FFF2B0] hover:bg-[#F7D154] hover:text-[#140F17]"
                >
                  <a
                    href={officialGameFacts.officialRobloxUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Roblox
                    <ExternalLink className="size-4" />
                  </a>
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {keywordLinks.map((item) => (
                  <LocaleLink
                    key={item.keyword}
                    href={item.href}
                    className="rounded-md border border-[#3B303F] bg-[#140F17]/75 px-3 py-2 font-medium text-[#D8C7D8] text-sm transition hover:border-[#3ED7B5] hover:text-[#3ED7B5]"
                  >
                    {item.keyword.replace('paint an album ', '')}
                  </LocaleLink>
                ))}
              </div>
            </div>

            <aside
              aria-label="Paint an Album gameplay video"
              className="rounded-lg border border-[#3B303F] bg-[#140F17]/85 p-4 shadow-2xl"
            >
              {featuredVideo ? (
                <div className="overflow-hidden rounded-md border border-[#3B303F] bg-black">
                  <iframe
                    className="aspect-video w-full"
                    src={`https://www.youtube.com/embed/${featuredVideo.id}`}
                    title={featuredVideo.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                  <a
                    href={featuredVideo.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between gap-3 bg-[#201824] px-3 py-2 text-[#D8C7D8] text-xs transition hover:text-[#3ED7B5]"
                  >
                    <span className="inline-flex min-w-0 items-center gap-2">
                      <Play className="size-3 shrink-0 text-[#F7D154]" />
                      <span className="min-w-0 truncate">
                        Gameplay reference
                      </span>
                    </span>
                    <ExternalLink className="size-3 shrink-0" />
                  </a>
                </div>
              ) : null}
            </aside>
          </div>
        </Container>
      </section>

      <Container className="px-4 py-8">
        <PaintAlbumMobileMenu currentPath="/" />
        <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_264px]">
          <main className="min-w-0 space-y-10">
            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {primaryLinks.map((link) => (
                <LocaleLink
                  key={link.title}
                  href={link.href}
                  className="group rounded-lg border border-[#3B303F] bg-[#201824] p-5 transition hover:border-[#3ED7B5]"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-[#F7D154] text-[#140F17]">
                      <link.icon className="size-5" />
                    </span>
                    <div className="min-w-0">
                      <h2 className="font-display text-[#FFF2B0] text-xl font-bold">
                        {link.title}
                      </h2>
                      <p className="mt-2 text-[#D8C7D8] text-sm leading-6">
                        {link.body}
                      </p>
                    </div>
                  </div>
                </LocaleLink>
              ))}
            </section>

            <section className="grid gap-5 lg:grid-cols-2">
              <div className="rounded-lg border border-[#3B303F] bg-[#201824] p-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-[#3ED7B5] text-xs uppercase tracking-[0.18em]">
                      Latest Game Checks
                    </p>
                    <h2 className="mt-2 font-display text-3xl font-black">
                      Live wiki pulse
                    </h2>
                  </div>
                  <Button
                    asChild
                    variant="ghost"
                    className="text-[#F7E8C6] hover:text-[#3ED7B5]"
                  >
                    <LocaleLink href="/updates">
                      All updates
                      <ArrowRight className="size-4" />
                    </LocaleLink>
                  </Button>
                </div>

                <div className="mt-6 space-y-5">
                  {latestUpdateItems.map((item) => (
                    <LocaleLink
                      key={item.title}
                      href="/updates"
                      className="group grid gap-3 rounded-md border border-transparent p-2 transition hover:border-[#3B303F] hover:bg-[#140F17]"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <h3 className="font-display font-bold text-[#FFF2B0]">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-[#D8C7D8] text-sm leading-6">
                            {item.body}
                          </p>
                        </div>
                        <time className="shrink-0 text-[#D8C7D8] text-xs">
                          {item.date}
                        </time>
                      </div>
                    </LocaleLink>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-[#3B303F] bg-[#201824] p-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-[#F7D154] text-xs uppercase tracking-[0.18em]">
                      Start Here
                    </p>
                    <h2 className="mt-2 font-display text-3xl font-black">
                      First cover checklist
                    </h2>
                  </div>
                  <Images className="size-8 text-[#F7D154]" />
                </div>
                <div className="mt-6 space-y-4">
                  {startSteps.map((step, index) => (
                    <LocaleLink
                      key={step.title}
                      href={step.href}
                      className="group flex gap-3 rounded-lg border border-transparent p-2 transition hover:border-[#3B303F] hover:bg-[#140F17]"
                    >
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-[#3ED7B5] text-[#F7E8C6]">
                        {index + 1}
                      </span>
                      <div className="min-w-0">
                        <h3 className="font-display font-bold text-[#FFF8E8]">
                          {step.title}
                        </h3>
                        <p className="mt-1 text-[#D8C7D8] text-sm leading-6">
                          {step.body}
                        </p>
                      </div>
                      <ArrowRight className="ml-auto mt-2 size-4 shrink-0 text-[#3ED7B5] transition group-hover:translate-x-0.5" />
                    </LocaleLink>
                  ))}
                </div>
              </div>
            </section>

            <section>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="font-semibold text-[#3ED7B5] text-xs uppercase tracking-[0.18em]">
                    Topic Hubs
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-black">
                    Paint an Album routes
                  </h2>
                </div>
                <Button asChild variant="outline">
                  <LocaleLink href="/guides">All guides</LocaleLink>
                </Button>
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {topicPageList.map((topic) => (
                  <LocaleLink
                    key={topic.route}
                    href={topic.route}
                    className="group rounded-lg border border-[#3B303F] bg-[#201824] p-5 transition hover:border-[#F7D154]"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-display text-[#FFF2B0] text-xl font-bold">
                        {topic.label}
                      </h3>
                      <ArrowRight className="size-4 shrink-0 text-[#F7D154] transition group-hover:translate-x-0.5" />
                    </div>
                    <p className="mt-3 text-[#D8C7D8] text-sm leading-6">
                      {topic.summary}
                    </p>
                  </LocaleLink>
                ))}
              </div>
            </section>

            <section>
              <div>
                <p className="font-semibold text-[#3ED7B5] text-xs uppercase tracking-[0.18em]">
                  Latest Guides
                </p>
                <h2 className="mt-2 font-display text-3xl font-black">
                  Player decisions covered
                </h2>
              </div>
              <div className="mt-5 grid gap-4 lg:grid-cols-2">
                {latestGuides.map((guide) => (
                  <LocaleLink
                    key={guide.slug}
                    href={`/guides/${guide.slug}`}
                    className="group rounded-lg border border-[#3B303F] bg-[#201824] p-5 transition hover:border-[#3ED7B5]"
                  >
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-[#F76F5E] text-[#140F17]">
                        {guide.category}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-[#3B303F] text-[#D8C7D8]"
                      >
                        {guide.difficulty}
                      </Badge>
                    </div>
                    <h3 className="mt-4 font-display text-[#FFF2B0] text-2xl font-bold">
                      {guide.title}
                    </h3>
                    <p className="mt-3 text-[#D8C7D8] text-sm leading-6">
                      {guide.summary}
                    </p>
                  </LocaleLink>
                ))}
              </div>
            </section>
          </main>

          <PaintAlbumRouteSidebar currentPath="/" />
        </div>
      </Container>
    </div>
  );
}
