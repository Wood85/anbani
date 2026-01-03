import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';

import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';

import '@/app/globals.scss';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin', 'cyrillic'],
});

export const metadata: Metadata = {
  title: 'Anbani Group',
  description: 'Мебель на заказ в Батуми. Custom furniture in Batumi.',
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

type Locale = (typeof routing.locales)[number];

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${montserrat.variable}`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
