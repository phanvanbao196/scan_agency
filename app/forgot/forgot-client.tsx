"use client";

import Link from "next/link";
import { useRef } from "react";
import { Locale, getDictionary } from "@/lib/i18n";
import styles from "./forgot.module.css";

export default function ForgotClient({ locale }: { locale: Locale }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const dictionary = getDictionary(locale);
  const forgot = dictionary.forgot;

  const focusForm = () => {
    inputRef.current?.focus();
    inputRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.header}>
          <Link
            href="/"
            aria-label={forgot.backAriaLabel}
            className={styles.backButton}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15 18 9 12l6-6" />
            </svg>
          </Link>
          <h1 className={styles.title}>{forgot.title}</h1>
          <p className={styles.subtitle}>{forgot.subtitle}</p>
        </div>

        <form className={styles.form}>
          <label className={styles.floatingField}>
            <input
              type="text"
              name="identifier"
              placeholder=" "
              className={styles.input}
              autoComplete="username"
              ref={inputRef}
              required
            />
            <span className={styles.floatingLabel}>{forgot.inputLabel}</span>
          </label>
          <button type="submit" className={styles.primaryButton}>
            {forgot.continueButton}
          </button>
        </form>
      </div>

      <div className={styles.langRow}>
        {forgot.languages.map((lang) => (
          <button
            key={lang}
            type="button"
            className={styles.langButton}
            onClick={focusForm}
          >
            {lang}
          </button>
        ))}
      </div>

      <div className={styles.divider} />

      <div className={styles.footerLinks}>
        {forgot.footerLinks.map((item) => (
          <button
            key={item}
            type="button"
            className={styles.footerButton}
            onClick={focusForm}
          >
            {item}
          </button>
        ))}
      </div>

      <p className={styles.copy}>{forgot.copyright}</p>
    </div>
  );
}
