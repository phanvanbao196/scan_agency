"use client";

import { useEffect, useRef, useState } from "react";
import { Locale, getDictionary } from "@/lib/i18n";
import styles from "./gate.module.css";

const SCRIPT_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

function loadTurnstileScript(scriptLoadFailedMessage: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined") {
      resolve();
      return;
    }

    if (window.turnstile) {
      resolve();
      return;
    }

    const existing = document.querySelector(`script[src="${SCRIPT_SRC}"]`);
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () => reject(new Error(scriptLoadFailedMessage)));
      return;
    }

    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    script.defer = true;
    script.addEventListener("load", () => resolve());
    script.addEventListener("error", () => reject(new Error(scriptLoadFailedMessage)));
    document.head.appendChild(script);
  });
}

export default function GateClient({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);
  const gateText = dictionary.gate;
  const widgetRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [status, setStatus] = useState<"idle" | "verifying" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function setup() {
      const siteKey = "0x4AAAAAAC0EvkiZwUgBk0JB";
      if (!siteKey) {
        setStatus("error");
        setErrorMessage(gateText.missingSiteKey);
        return;
      }

      try {
        await loadTurnstileScript(gateText.scriptLoadFailed);
        if (cancelled || !widgetRef.current || !window.turnstile) {
          return;
        }

        widgetIdRef.current = window.turnstile.render(widgetRef.current, {
          sitekey: siteKey,
          theme: "light",
          callback: async (token: string) => {
            setStatus("verifying");
            setErrorMessage(null);

            try {
              const response = await fetch("/api/turnstile/verify", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ token }),
              });

              if (!response.ok) {
                const body = await response.json().catch(() => ({}));
                throw new Error(body?.error ?? gateText.verificationFailed);
              }

              const url = new URL(window.location.href);
              const nextPath = url.searchParams.get("next") || "/";
              window.location.assign(nextPath);
            } catch (error) {
              setStatus("error");
              setErrorMessage(error instanceof Error ? error.message : gateText.verificationFailed);
              if (window.turnstile && widgetIdRef.current) {
                window.turnstile.reset(widgetIdRef.current);
              }
            } finally {
              setStatus("idle");
            }
          },
          "error-callback": () => {
            setStatus("error");
            setErrorMessage(gateText.captchaError);
          },
          "expired-callback": () => {
            if (window.turnstile && widgetIdRef.current) {
              window.turnstile.reset(widgetIdRef.current);
            }
          },
        });
      } catch (error) {
        if (!cancelled) {
          setStatus("error");
          setErrorMessage(error instanceof Error ? error.message : gateText.captchaLoadFailed);
        }
      }
    }

    setup();

    return () => {
      cancelled = true;
      if (window.turnstile && widgetIdRef.current) {
        window.turnstile.remove(widgetIdRef.current);
      }
    };
  }, [gateText.captchaError, gateText.captchaLoadFailed, gateText.missingSiteKey, gateText.scriptLoadFailed, gateText.verificationFailed]);

  return (
    <div className={styles.page}>
      <div className={styles.card}>

        <div ref={widgetRef} className={styles.widget} />
        {status === "verifying" ? <div className={styles.note}>{gateText.verifying}</div> : null}
        {errorMessage ? <div className={styles.error}>{errorMessage}</div> : null}
      </div>
    </div>
  );
}
