import { cookies, headers } from "next/headers";
import ForgotClient from "./forgot-client";
import { DEFAULT_LOCALE, LOCALE_COOKIE_NAME, normalizeLocale } from "@/lib/i18n";

export default async function ForgotPage() {
  const cookieStore = await cookies();
  const headerStore = await headers();
  const locale =
    normalizeLocale(headerStore.get("x-detected-locale")) ??
    normalizeLocale(cookieStore.get(LOCALE_COOKIE_NAME)?.value) ??
    DEFAULT_LOCALE;

  return <ForgotClient locale={locale} />;
}
