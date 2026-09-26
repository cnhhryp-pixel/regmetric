import './globals.css';
import Header from '../components/Header';
import SiteFooter from '../components/SiteFooter';
import StructuredData from '../components/StructuredData';

export const metadata = {
  metadataBase: new URL('https://regmetric.com'),
  title: {
    default: 'RegMetric | EU Product Compliance Intelligence',
    template: '%s | RegMetric',
  },
  description: 'Regulatory intelligence, product compliance research, preliminary assessment and reporting tools for EU market-entry workflows.',
  applicationName: 'RegMetric',
  manifest: '/site.webmanifest',
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    shortcut: '/favicon.svg',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    siteName: 'RegMetric',
    title: 'RegMetric | EU Product Compliance Intelligence',
    description: 'Product compliance research, assessment and reporting tools for EU market-entry workflows.',
    url: 'https://regmetric.com',
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'RegMetric',
  url: 'https://regmetric.com'
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'RegMetric',
  url: 'https://regmetric.com',
  description: 'EU product compliance intelligence, research, assessment and reporting tools.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StructuredData data={organizationJsonLd} />
        <StructuredData data={websiteJsonLd} />
        <Header />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
