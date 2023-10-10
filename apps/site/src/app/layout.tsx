import '@/styles/globals.css';

import { Metadata } from 'next';
import { Poppins as FontSans } from 'next/font/google';
import localFont from 'next/font/local';

import { cn } from '@/lib/tailwind';

import { Providers } from '@/components/providers';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/navigation/footer';

import { StarwarsBackground } from '@/components/background';

export const metadata: Metadata = {
  description: 'Valentín Galfré - Conexa Technical Test',
  title: {
    absolute: 'Conexa Techincal Test',
    template: '%s | Conexa',
  },
};

const fontSans = FontSans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans',
});

const fontStarWars = localFont({
  src: '../assets/fonts/starwars.ttf',
  variable: '--font-starwars',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='bg-background dark' suppressHydrationWarning>
      <body
        className={cn(
          'text-foreground min-h-screen font-sans antialiased',
          fontSans.variable,
          fontStarWars.variable,
        )}
      >
        <Providers>
          <StarwarsBackground />
          <Navigation />
          <main className='mx-auto max-w-3xl pb-20'>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
