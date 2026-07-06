import {
  AdsterraNativeBanner,
  AdsterraTopBanner,
} from '@/components/ads/adsterra-ad';
import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';
import { PaintAlbumPageShell } from '@/components/paintalbum/wiki-navigation';
import type { ReactNode } from 'react';

export const dynamic = 'force-dynamic';

export default function PaintAlbumLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-[#140F17]">
      <Navbar scroll={true} />
      <AdsterraTopBanner />
      <main className="flex-1">
        <PaintAlbumPageShell>{children}</PaintAlbumPageShell>
      </main>
      <AdsterraNativeBanner className="border-[#3B303F] border-t bg-[#140F17]" />
      <Footer />
    </div>
  );
}
