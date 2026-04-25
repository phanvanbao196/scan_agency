import { cookies, headers } from "next/headers";
import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE_NAME,
  Locale,
  normalizeLocale,
  resolveLocale,
} from "@/lib/i18n";
import TwoFactorClient from "./two-factor-client";

export default async function TwoFactorPage() {
  const store = await cookies();
  const headerStore = await headers();
  const detectedLocale = normalizeLocale(headerStore.get("x-detected-locale"));
  const locale =
    detectedLocale ??
    resolveLocale({
      cookieLocale: store.get(LOCALE_COOKIE_NAME)?.value ?? null,
      countryCode: headerStore.get("x-detected-country"),
      acceptLanguage: headerStore.get("accept-language"),
    }) ??
    DEFAULT_LOCALE;
  return <TwoFactorClient locale={locale} />;
}
