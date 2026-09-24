import './globals.css';
import Header from '../components/Header';
import SiteFooter from '../components/SiteFooter';

export const metadata = {
  title: 'RegMetric - Regulatory Intelligence Platform',
  description: 'AI-powered regulatory intelligence and compliance risk assessment platform.',
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
