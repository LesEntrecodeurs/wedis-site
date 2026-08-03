import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { appConfig } from '@/config/app.config';
import { routing } from '@/i18n/routing';
import requestConfig from '@/i18n/request';
import { PreviewBridge } from '@/components/layout/PreviewBridge';
import './globals.css';

export const metadata: Metadata = {
  title: appConfig.name,
  description: appConfig.description,
};

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const locale = params.locale;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const { messages } = await requestConfig({ requestLocale: Promise.resolve(locale) });

  return (
    <html lang={locale}>
      <body>
        <PreviewBridge />
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
