'use client';

import { Badge } from '@/components/ui/badge';
import { codeCheckSummary } from '@/data/paintalbum/codes';
import { LocaleLink, useLocalePathname } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import {
  ArrowRight,
  type BookOpen,
  Brush,
  Camera,
  CheckCircle2,
  ChevronDown,
  CircleHelp,
  Compass,
  Gamepad2,
  Images,
  ListChecks,
  Palette,
  RadioTower,
  Search,
  ShieldCheck,
  ShoppingBag,
  Users,
} from 'lucide-react';
import type { ReactNode } from 'react';

interface WikiNavLink {
  href: string;
  label: string;
}

interface WikiNavGroup {
  title: string;
  icon: typeof BookOpen;
  links: WikiNavLink[];
  activePrefixes?: string[];
}

const wikiNavGroups: WikiNavGroup[] = [
  {
    title: 'Start Here',
    icon: Compass,
    links: [
      { href: '/', label: 'Home' },
      { href: '/guides', label: 'All Guides' },
      { href: '/how-to-play', label: 'How to Play' },
      { href: '/guides/beginner-guide', label: 'Beginner Guide' },
      { href: '/download', label: 'Official Roblox' },
    ],
  },
  {
    title: 'Album Covers',
    icon: Search,
    links: [
      { href: '/album-search', label: 'Album Search' },
      {
        href: '/guides/album-search-live-database-guide',
        label: 'Live Database Guide',
      },
      { href: '/guides/best-album-cover-ideas-guide', label: 'Cover Ideas' },
      {
        href: '/guides/color-matching-and-block-planning-guide',
        label: 'Color Matching',
      },
    ],
  },
  {
    title: 'Painting',
    icon: Brush,
    links: [
      { href: '/tools', label: 'Tools and Workflow' },
      { href: '/map-and-plots', label: 'Map and Lobby Plots' },
      {
        href: '/guides/clean-album-cover-painting-guide',
        label: 'Clean Cover Painting',
      },
      {
        href: '/guides/multiplayer-lobby-autosave-guide',
        label: 'Multiplayer and Autosave',
      },
      { href: '/guides/gallery-camera-sharing-guide', label: 'Gallery Camera' },
    ],
  },
  {
    title: 'Status',
    icon: RadioTower,
    links: [
      { href: '/codes', label: 'Codes Status' },
      { href: '/guides/codes-status-guide', label: 'Codes Guide' },
      { href: '/gamepasses', label: 'Gamepasses' },
      {
        href: '/guides/gamepasses-paint-roller-no-hint-cooldown-guide',
        label: 'Gamepass Decisions',
      },
      { href: '/updates', label: 'Updates' },
    ],
  },
  {
    title: 'Safety',
    icon: ShieldCheck,
    links: [
      {
        href: '/guides/official-links-safety-guide',
        label: 'Official Links Safety',
      },
      {
        href: '/guides/paint-an-album-vs-paint-to-hide-guide',
        label: 'Paint Game Comparison',
      },
      { href: '/download', label: 'Verified Place ID' },
    ],
  },
] as const;

function isCurrentPath(currentPath: string | undefined, href: string) {
  return Boolean(currentPath && currentPath === href);
}

function isGroupCurrentPath(
  currentPath: string | undefined,
  group: WikiNavGroup
) {
  if (!currentPath) {
    return false;
  }

  return (
    group.links.some((link) => isCurrentPath(currentPath, link.href)) ||
    Boolean(
      group.activePrefixes?.some(
        (prefix) =>
          currentPath === prefix || currentPath.startsWith(`${prefix}/`)
      )
    )
  );
}

function WikiNavLinkItem({
  currentPath,
  href,
  label,
}: {
  currentPath?: string;
  href: string;
  label: string;
}) {
  const isActive = isCurrentPath(currentPath, href);

  return (
    <LocaleLink
      href={href}
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        'group flex min-w-0 items-center justify-between gap-3 rounded-md border px-3 py-2 text-sm leading-6 transition',
        isActive
          ? 'border-[#3ED7B5] bg-[#3ED7B5] font-semibold text-[#140F17]'
          : 'border-[#3B303F] bg-[#140F17] text-[#D8C7D8] hover:border-[#3ED7B5] hover:bg-[#281E2E] hover:text-[#FFF8E8]'
      )}
    >
      <span className="min-w-0 break-words">{label}</span>
      <ArrowRight
        className={cn(
          'size-4 shrink-0',
          isActive ? 'text-[#140F17]' : 'text-[#F7D154]'
        )}
      />
    </LocaleLink>
  );
}

function CodesSidebarCard() {
  return (
    <div className="rounded-lg border border-[#3B303F] bg-[#140F17] p-4">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="font-display font-bold text-[#FFF8E8] text-lg">
          Codes Status
        </h2>
        <Badge className="bg-[#F7D154] text-[#140F17]">0 active</Badge>
      </div>
      <p className="text-[#D8C7D8] text-xs leading-5">
        {codeCheckSummary.status}
      </p>
      <div className="mt-4 rounded-md border border-[#3B303F] bg-[#201824] p-3">
        <div className="flex items-start gap-2">
          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#3ED7B5]" />
          <p className="text-[#F7E8C6] text-xs leading-5">
            Publish codes only after a real in-game redemption box and reward
            are verified for place ID 120154566897536.
          </p>
        </div>
      </div>
      <LocaleLink
        href="/codes"
        className="mt-4 flex items-center justify-center gap-2 border-[#3B303F] border-t pt-3 font-medium text-[#F7E8C6] text-sm transition hover:text-[#3ED7B5]"
      >
        View codes status
        <ArrowRight className="size-4" />
      </LocaleLink>
    </div>
  );
}

export function PaintAlbumMobileMenu({
  currentPath,
}: {
  currentPath?: string;
}) {
  return (
    <details className="mx-4 mb-6 rounded-lg border border-[#3B303F] bg-[#201824] p-4 xl:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-semibold text-[#FFF8E8] [&::-webkit-details-marker]:hidden">
        <span className="inline-flex items-center gap-2">
          <ListChecks className="size-4 text-[#3ED7B5]" />
          Wiki Menu
        </span>
        <ChevronDown className="size-4 text-[#F7D154]" />
      </summary>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {wikiNavGroups.map((group) => (
          <div key={group.title}>
            <p className="mb-2 flex items-center gap-2 font-semibold text-[#F7D154] text-xs uppercase">
              <group.icon className="size-4" />
              {group.title}
            </p>
            <div className="grid gap-2">
              {group.links.map((link) => (
                <WikiNavLinkItem
                  key={link.href}
                  currentPath={currentPath}
                  href={link.href}
                  label={link.label}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </details>
  );
}

export function PaintAlbumRouteSidebar({
  currentPath,
}: {
  currentPath?: string;
}) {
  return (
    <aside className="hidden w-[264px] shrink-0 space-y-4 xl:block">
      <div className="sticky top-24 max-h-[calc(100vh-7rem)] space-y-4 overflow-y-auto pb-6">
        <div className="rounded-lg border border-[#3B303F] bg-[#201824] p-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="font-semibold text-[#3ED7B5] text-xs uppercase tracking-[0.18em]">
                Wiki Navigation
              </p>
              <h2 className="mt-1 font-display text-[#FFF8E8] text-xl font-bold">
                Studio routes
              </h2>
            </div>
            <Palette className="size-5 shrink-0 text-[#F7D154]" />
          </div>

          <div className="mt-4 space-y-4">
            {wikiNavGroups.map((group) => {
              const isGroupActive = isGroupCurrentPath(currentPath, group);

              return (
                <details
                  key={group.title}
                  open={isGroupActive}
                  className={cn(
                    'group rounded-md border p-3',
                    isGroupActive
                      ? 'border-[#3ED7B5]/70 bg-[#173B37]/45'
                      : 'border-[#3B303F] bg-[#140F17]'
                  )}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-2 font-semibold text-[#FFF8E8] text-sm [&::-webkit-details-marker]:hidden">
                    <span className="flex min-w-0 items-center gap-2">
                      <group.icon className="size-4 shrink-0 text-[#F7D154]" />
                      <span className="min-w-0 break-words">{group.title}</span>
                    </span>
                    <Badge
                      variant="outline"
                      className="ml-auto border-[#3B303F] bg-[#201824] px-1.5 py-0.5 text-[#D8C7D8] text-[10px]"
                    >
                      {group.links.length}
                    </Badge>
                    <ChevronDown className="size-4 shrink-0 text-[#3ED7B5] transition group-open:rotate-180" />
                  </summary>
                  <div className="mt-3 grid gap-2">
                    {group.links.map((link) => (
                      <WikiNavLinkItem
                        key={link.href}
                        currentPath={currentPath}
                        href={link.href}
                        label={link.label}
                      />
                    ))}
                  </div>
                </details>
              );
            })}
          </div>
        </div>
        <CodesSidebarCard />
        <div className="rounded-lg border border-[#3B303F] bg-[#140F17] p-4 text-[#D8C7D8] text-sm leading-6">
          <div className="mb-2 flex items-center gap-2 font-semibold text-[#FFF8E8]">
            <ShieldCheck className="size-4 text-[#3ED7B5]" />
            Roblox reminder
          </div>
          Verify place ID 120154566897536 before trusting codes, gamepasses, or
          guide claims. Paint an Album is not Paint To Hide, Paint and Hide, or
          Paint or Die.
        </div>
      </div>
    </aside>
  );
}

export function PaintAlbumPageShell({ children }: { children: ReactNode }) {
  const currentPath = useLocalePathname();

  if (currentPath === '/') {
    return <>{children}</>;
  }

  return (
    <div className="bg-[#140F17]">
      <PaintAlbumMobileMenu currentPath={currentPath} />
      <div className="mx-auto grid max-w-7xl gap-8 xl:grid-cols-[minmax(0,1fr)_264px]">
        <div className="min-w-0">{children}</div>
        <PaintAlbumRouteSidebar currentPath={currentPath} />
      </div>
    </div>
  );
}

export const navigationIcons = {
  codes: RadioTower,
  search: Search,
  painting: Brush,
  multiplayer: Users,
  gallery: Camera,
  gamepasses: ShoppingBag,
  download: Gamepad2,
  safety: CircleHelp,
  albums: Images,
};
