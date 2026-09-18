import { Manrope } from 'next/font/google';
import { ReactNode } from 'react';
import './globals.scss';

interface RootLayoutProps {
  children: ReactNode;
}

const manrope = Manrope({
  subsets: ['cyrillic', 'latin'],
  weight: ['700', '600', '400'],
  variable: '--font-manrope',
});

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={manrope.variable}>
      <body>{children}</body>
    </html>
  );
}
