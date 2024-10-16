import React, { Suspense } from 'react';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { GlobalStyle } from '@/styles';

import Providers from './provider';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  applicationName: 'FutureWorkLab',
  keywords: ['퓨처워크랩', 'FutureWorkLab', '스타트업', 'AI', '소프트웨어'],
  creator: 'FutureWorkLab Inc.',
  publisher: 'FutureWorkLab Inc.',
  description: '퓨처워크랩 공식 홈페이지입니다.',
  title: {
    template: '퓨처워크랩 - %s',
    default: '퓨처워크랩',
  },
  openGraph: {
    title: '퓨처워크랩',
    description: '퓨처워크랩 공식 홈페이지입니다.',
    siteName: 'FutureWorkLab',
    locale: 'ko',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta name="robots" content="noindex" />
      </head>
      <body>
        <Providers>
          <ReactQueryDevtools />
          <GlobalStyle />
          <main>{children}</main>
          <Suspense fallback={<div>Loading...</div>}></Suspense>
        </Providers>
      </body>
    </html>
  );
}
