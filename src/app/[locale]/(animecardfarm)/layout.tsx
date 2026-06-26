import {
  AdsterraNativeBanner,
  AdsterraTopBanner,
} from '@/components/ads/adsterra-ad';
import { AnimeCardFarmPageShell } from '@/components/animecardfarm/wiki-navigation';
import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';
import type { ReactNode } from 'react';

export default function AnimeCardFarmLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-[#080D17]">
      <Navbar scroll={true} />
      <AdsterraTopBanner />
      <main className="flex-1">
        <AnimeCardFarmPageShell>{children}</AnimeCardFarmPageShell>
      </main>
      <AdsterraNativeBanner className="border-[#27415F] border-t bg-[#080D17]" />
      <Footer />
    </div>
  );
}
