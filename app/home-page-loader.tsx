"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import HomePageClient from "./home-page-client";
import { Locale, getDictionary } from "@/lib/i18n";
import styles from "./home-page-loader.module.css";

type HomePageLoaderProps = {
  locale: Locale;
  detectedCountryCode?: string | null;
  detectedCallingCode?: string | null;
  detectedIp?: string | null;
  detectedLocation?: string | null;
};

export default function HomePageLoader(props: HomePageLoaderProps) {
  const [showLoader, setShowLoader] = useState(true);
  const dictionary = getDictionary(props.locale);
  const loader = dictionary.loader;

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 900);
    return () => clearTimeout(timer);
  }, []);

  if (showLoader) {
    return (
      <div className={styles.loader} aria-busy="true" aria-live="polite">
        <Image src="/svgexport-1.svg" alt={loader.facebookAlt} width={56} height={56} className={styles.centerIcon} priority />
        <div className={styles.footer}>
          <span className={styles.fromText}>{loader.fromText}</span>
          <Image src="/metalogo.svg" alt={loader.metaAlt} width={72} height={16} className={styles.metaLogo} />
        </div>
      </div>
    );
  }

  return <HomePageClient {...props} />;
}
