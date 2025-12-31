import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { dana, poppins } from '@/config/fonts/fonts';
import { env } from '@/config/env';
import { ThemeProvider } from 'next-themes';

export const metadata: Metadata = {
  title: 'Etmify V2',
  description: '',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={` ${dana.variable} ${poppins.variable} `}
      lang="fa"
      dir="rtl"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      {env.NODE_ENV === 'development' && (
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/react-scan/dist/auto.global.js"
          strategy="afterInteractive"
        />
      )}
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
