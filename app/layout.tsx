import './globals.css';
import Header from '../components/Header';
import SiteFooter from '../components/SiteFooter';

export const metadata = {
  metadataBase: new URL('https://regmetric.com'),
  title: {
    default: 'RegMetric | EU Product Compliance Intelligence',
    template: '%s | RegMetric',
  },
  description: 'Regulatory intelligence, product compliance research, preliminary assessment and reporting tools for EU market-entry workflows.',
  applicationName: 'RegMetric',
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
