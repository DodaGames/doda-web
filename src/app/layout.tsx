import '@/styles/globals.css';

import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: '두다 (Doda) - 쉽고 재밌는 바둑 게임',
  description: '바둑을 처음 배우는 사람도 쉽고 재밌게 플레이할 수 있도록 설계한 바둑 게임 앱, 두다입니다.',
  icons: {
    icon: '/logo.svg',
  },
  openGraph: {
    title: '두다 (Doda) - 쉽고 재밌는 바둑 게임',
    description: '바둑을 처음 배우는 사람도 쉽고 재밌게 플레이할 수 있도록 설계한 바둑 게임 앱, 두다입니다.',
    siteName: '두다 (Doda)',
    locale: 'ko_KR',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: '두다 (Doda) 로고',
      },
    ],
  },
  twitter: {
    title: '두다 (Doda) - 쉽고 재밌는 바둑 게임',
    description: '바둑을 처음 배우는 사람도 쉽고 재밌게 플레이할 수 있도록 설계한 바둑 게임 앱, 두다입니다.',
    card: 'summary',
    images: ['/logo.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko' className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className='flex min-h-full flex-col'>{children}</body>
    </html>
  );
}
