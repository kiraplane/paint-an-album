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
    title: 'Privacy Policy | Paint an Album Wiki',
    description:
      'Privacy policy for the independent Paint an Album Wiki and Roblox guide site.',
    locale,
    pathname: '/privacy',
  });
}

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#140F17] py-12 text-[#FFF8E8]">
      <Container className="max-w-3xl space-y-6 px-4">
        <h1 className="font-display text-4xl font-black">Privacy Policy</h1>
        <p className="leading-8 text-[#D8C7D8]">
          Paint an Album Wiki is an independent Roblox guide site. We do not
          require accounts for browsing codes status, album search, painting
          workflow, autosave, gamepass notes, official links, or safety pages.
        </p>
        <p className="leading-8 text-[#D8C7D8]">
          Standard analytics or hosting logs may record aggregate traffic data
          such as page views, referrers, device type, and approximate region. We
          use this to improve guides and fix broken pages.
        </p>
        <p className="leading-8 text-[#D8C7D8]">
          Local image assets are used for faster page loading. We do not sell
          asset files or provide downloads as standalone packs.
        </p>
        <p className="leading-8 text-[#D8C7D8]">
          Privacy questions can be sent to hello@paint-an-album.wiki.
        </p>
      </Container>
    </div>
  );
}
