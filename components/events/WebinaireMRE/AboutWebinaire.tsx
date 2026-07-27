"use client";

import { useTranslate } from "@/lib/i18n";

export default function AboutWebinaire() {
  const { t } = useTranslate();
  const w = "webinaireMRE.aboutWebinaire";

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-red-400 mb-4 block">
            {t(`${w}.eyebrow`)}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-balance">
            {t(`${w}.title`)}
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            {t(`${w}.p1`)}
          </p>

          <p className="text-lg text-gray-300 leading-relaxed mb-10">
            {t(`${w}.p2`)}
          </p>

          <blockquote className="border-l-4 border-red-500 pl-6 italic text-xl text-white/90 leading-relaxed">
            &ldquo;{t(`${w}.quote`)}&rdquo;
          </blockquote>

          <div className="mt-12 grid sm:grid-cols-3 gap-6 text-center">
            <div className="bg-white/5 rounded-xl p-6">
              <p className="text-3xl font-bold text-red-400 mb-1">{t(`${w}.stat1Value`)}</p>
              <p className="text-gray-400 text-sm">{t(`${w}.stat1Label`)}</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6">
              <p className="text-3xl font-bold text-red-400 mb-1">{t(`${w}.stat2Value`)}</p>
              <p className="text-gray-400 text-sm">{t(`${w}.stat2Label`)}</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6">
              <p className="text-3xl font-bold text-red-400 mb-1">{t(`${w}.stat3Value`)}</p>
              <p className="text-gray-400 text-sm">{t(`${w}.stat3Label`)}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
