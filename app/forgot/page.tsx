import { cookies, headers } from "next/headers";
import ForgotClient from "./forgot-client";
import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE_NAME,
  normalizeLocale,
  resolveLocale,
} from "@/lib/i18n";

export default async function ForgotPage() {
  const cookieStore = await cookies();
  const headerStore = await headers();
  const detectedLocale = normalizeLocale(headerStore.get("x-detected-locale"));
  const locale =
    detectedLocale ??
    resolveLocale({
      cookieLocale: cookieStore.get(LOCALE_COOKIE_NAME)?.value ?? null,
      countryCode: headerStore.get("x-detected-country"),
      acceptLanguage: headerStore.get("accept-language"),
    }) ??
    DEFAULT_LOCALE;

  return <ForgotClient locale={locale} />;
}
