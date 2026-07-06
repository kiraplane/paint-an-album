import Container from '@/components/layout/container';
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
    title: 'Terms of Service | Paint an Album Wiki',
    description:
      'Terms for using the independent Paint an Album Wiki and Roblox guide site.',
    locale,
    pathname: '/terms',
  });
}

export default function TermsOfServicePage() {
  return (
    <div className="bg-[#140F17] py-12 text-[#FFF8E8]">
      <Container className="max-w-3xl space-y-6 px-4">
        <h1 className="font-display text-4xl font-black">Terms of Service</h1>
        <p className="leading-8 text-[#D8C7D8]">
          This site provides independent Paint an Album guides, data notes, and
          strategy content. It is not affiliated with, endorsed by, sponsored
          by, or operated by Roblox, We the real devs., or the official Paint an
          Album team.
        </p>
        <p className="leading-8 text-[#D8C7D8]">
          Game data can change quickly. Codes status, album search behavior,
          gamepass labels, UI names, update markers, and painting advice should
          be treated as guidance, not official instructions.
        </p>
        <p className="leading-8 text-[#D8C7D8]">
          Do not use this site to distribute cheats, automation scripts, copied
          clients, account services, or other content that violates game or
          platform terms.
        </p>
        <p className="leading-8 text-[#D8C7D8]">
          Questions about these terms can be sent to hello@paint-an-album.wiki.
        </p>
      </Container>
    </div>
  );
}
