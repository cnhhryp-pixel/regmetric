import './globals.css';

export const metadata = {
  title: 'RegMetric - Regulatory Intelligence Platform',
  description: 'AI-powered regulatory intelligence and compliance risk assessment platform.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
