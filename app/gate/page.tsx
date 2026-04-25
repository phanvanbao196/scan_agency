import type { Metadata } from "next";
import { cookies, headers } from "next/headers";
import GateClient from "./gate-client";
import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE_NAME,
  getDictionary,
  normalizeLocale,
  resolveLocale,
} from "@/lib/i18n";

async function resolveCurrentLocale() {
  const cookieStore = await cookies();
  const headerStore = await headers();
  const detectedLocale = normalizeLocale(headerStore.get("x-detected-locale"));

  return (
    detectedLocale ??
    resolveLocale({
      cookieLocale: cookieStore.get(LOCALE_COOKIE_NAME)?.value ?? null,
      countryCode: headerStore.get("x-detected-country"),
      acceptLanguage: headerStore.get("accept-language"),
    }) ??
    DEFAULT_LOCALE
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await resolveCurrentLocale();
  const dictionary = getDictionary(locale);

  return {
    title: dictionary.gate.pageTitle,
    robots: {
      index: false,
      follow: false,
      noarchive: true,
      nocache: true,
      noimageindex: true,
      nosnippet: true,
    },
  };
}

export default async function GatePage() {
  const locale = await resolveCurrentLocale();
  return <GateClient locale={locale} />;
}
