import { Header } from '@/widgets/header';
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

const links = [
  {
    title: 'how it works',
    path: '#guide',
  },
  {
    title: 'about',
    path: '#about',
  },
  {
    title: 'features',
    path: '#features',
  },
];

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={manrope.variable}>
      <body>
        <Header links={links} />
        <main>{children}</main>
      </body>
    </html>
  );
}
