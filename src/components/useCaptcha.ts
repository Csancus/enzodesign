"use client";

import { useCallback, useEffect, useState } from "react";

export type CaptchaChallenge = {
  a: number;
  b: number;
  expires: number;
  sig: string;
};

// Összeadós captcha a kontakt formokhoz. A challenge-et a szerver adja
// (HMAC-aláírva), a beküldött payload-ot a szerver ellenőrzi.
export function useCaptcha() {
  const [challenge, setChallenge] = useState<CaptchaChallenge | null>(null);
  const [answer, setAnswer] = useState("");
  const [captchaError, setCaptchaError] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    setAnswer("");
    try {
      const res = await fetch("/api/contact", { cache: "no-store" });
      if (res.ok) setChallenge(await res.json());
    } catch {
      /* következő próbálkozásnál újra lekérjük */
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  // Kliens-oldali gyors ellenőrzés beküldés előtt; false → hibaüzenet kint
  const validate = useCallback(() => {
    if (!challenge) {
      setCaptchaError("Az ellenőrzés még töltődik, próbáld újra pár másodperc múlva.");
      refresh();
      return false;
    }
    if (answer.trim() === "" || Number(answer.trim()) !== challenge.a + challenge.b) {
      setCaptchaError("Hibás eredmény, kérjük számold újra.");
      return false;
    }
    setCaptchaError(null);
    return true;
  }, [challenge, answer, refresh]);

  const payload = challenge ? { ...challenge, answer: answer.trim() } : null;

  return { challenge, answer, setAnswer, captchaError, setCaptchaError, refresh, validate, payload };
}
