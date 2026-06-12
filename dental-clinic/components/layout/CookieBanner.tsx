"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!Cookies.get("cookie-consent")) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    Cookies.set("cookie-consent", "accepted", { expires: 365 });
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] w-[90%] max-w-sm rounded-2xl bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.25)]">
      <h3 className="text-lg font-semibold text-slate-900">
        Politika e Cookies
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-600">
        Ne përdorim cookies për të përmirësuar përvojën tuaj në faqen tonë dhe
        për të siguruar funksionimin e duhur të saj. Për më shumë informata,
        lexoni{" "}
        <Link
          href="/cookie-policy"
          className="font-semibold text-sky-600 transition hover:text-sky-700"
        >
          Politikën e Cookies
        </Link>{" "}
        dhe{" "}
        <Link
          href="/privacy-policy"
          className="font-semibold text-sky-600 transition hover:text-sky-700"
        >
          Politikën e Privatësisë
        </Link>
        .
      </p>

      <div className="mt-5 flex items-center gap-3">
        <button
          onClick={acceptCookies}
          className="flex-1 rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
        >
          Pranoj
        </button>

        <button
          onClick={() => setVisible(false)}
          className="flex-1 rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
        >
          Më vonë
        </button>
      </div>
    </div>
  );
}