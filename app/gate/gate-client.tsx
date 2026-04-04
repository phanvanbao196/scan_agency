"use client";

import { useEffect } from "react";
import { Locale, getDictionary } from "@/lib/i18n";
import styles from "./gate.module.css";

export default function GateClient({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);
  const gateText = dictionary.gate;

  useEffect(() => {
    const url = new URL(window.location.href);
    const nextPath = url.searchParams.get("next") || "/";
    window.location.replace(nextPath);
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.note}>{gateText.verifying}</div>
      </div>
    </div>
  );
}
