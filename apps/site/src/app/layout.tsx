import '@/styles/globals.css';
import Image from 'next/image';

import { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import localFont from 'next/font/local';

import { cn } from '@/lib/tailwind';

import { Providers } from '@/components/providers';
import { Navigation } from '@/components/navigation';

export const metadata: Metadata = {
  description: 'Valentín Galfré - Conexa Technical Test',
  title: {
    absolute: 'Conexa Techincal Test',
    template: '%s | Conexa',
  },
};

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontStarWars = localFont({
  src: '../assets/fonts/starwars.ttf',
  variable: '--font-starwars',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'bg-background dark min-h-screen font-sans antialiased',
          fontSans.variable,
          fontStarWars.variable,
        )}
      >
        <Providers>
          <Navigation />
          <main className='mx-auto max-w-3xl pt-40'>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
