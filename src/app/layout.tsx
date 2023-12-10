import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Layout from '@/components/common/layout';
import { Toaster } from '@/components/ui/toaster';
import { Analytics } from '@vercel/analytics/react';
import ReactQueryProviders from '@/api/query-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'THE WEEKLY',
  description: 'THE WEEKLY로 바뀌는 일주일',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ReactQueryProviders>
            <Layout>{children}</Layout>
            <Toaster />
          </ReactQueryProviders>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
