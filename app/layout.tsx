import type { Metadata, Viewport } from "next";
import { cookies, headers } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE_NAME,
  normalizeLocale,
  resolveLocale,
} from "@/lib/i18n";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type HeaderStore = Awaited<ReturnType<typeof headers>>;
type CookieStore = Awaited<ReturnType<typeof cookies>>;

async function resolveCurrentLocale(
  headerStore?: HeaderStore,
  cookieStore?: CookieStore,
) {
  const resolvedCookies = cookieStore ?? (await cookies());
  const resolvedHeaders = headerStore ?? (await headers());
  const detectedLocale = normalizeLocale(
    resolvedHeaders.get("x-detected-locale"),
  );

  return (
    detectedLocale ??
    resolveLocale({
      cookieLocale: resolvedCookies.get(LOCALE_COOKIE_NAME)?.value ?? null,
      countryCode: resolvedHeaders.get("x-detected-country"),
      acceptLanguage: resolvedHeaders.get("accept-language"),
    }) ??
    DEFAULT_LOCALE
  );
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

function resolveMetadataBase(headerStore: HeaderStore): URL {
  const envBase = process.env.NEXT_PUBLIC_SITE_URL;
  const forwardedHost = headerStore.get("x-forwarded-host");
  const host = forwardedHost ?? headerStore.get("host");
  const protocol =
    headerStore.get("x-forwarded-proto") ??
    (process.env.NODE_ENV === "development" ? "http" : "https");

  if (host) {
    return new URL(`${protocol}://${host}`);
  }

  if (envBase) {
    return new URL(envBase);
  }

  return new URL("http://localhost:3000");
}

export async function generateMetadata(): Promise<Metadata> {
  const headerStore = await headers();
  const metadataBase = resolveMetadataBase(headerStore);
  const description =
    "We have received several reports that your account violates our terms of service and community guidelines.";
  const ogTitle = "Meta Business Help Center";
  const title = "Meta for Business - Page Appeal";
  const ogUrl = new URL(
    "/opengraph/community-standard-69872655134",
    metadataBase,
  ).toString();
  const shareImageUrl = new URL("/YIkC89ISLjN.jpg", metadataBase).toString();

  return {
    title,
    description,
    metadataBase,
    icons: {
      icon: "/favicon-32x32.png",
    },
    openGraph: {
      title: ogTitle,
      description,
      url: ogUrl,
      siteName: ogTitle,
      type: "website",
      images: [
        {
          url: shareImageUrl,
          width: 1200,
          height: 630,
          alt: "Fanpage Privacy Policy",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: {
        url: shareImageUrl,
        alt: "Fanpage Privacy Policy",
      },
    },
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await resolveCurrentLocale();

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
