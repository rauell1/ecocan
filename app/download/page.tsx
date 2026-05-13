'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Download } from 'lucide-react';

const STORE_URLS = {
  playStore: "https://play.google.com/store/apps/details?id=com.superapp.ecocanapp",
  appStore: "https://apps.apple.com/app/6502695438",
  fallback: "https://ecocan.africa/download"
};

export default function DownloadRedirect() {
  useEffect(() => {
    const ua = window.navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(ua)) {
      window.location.href = STORE_URLS.appStore;
      return;
    }
    if (/android/.test(ua)) {
      window.location.href = STORE_URLS.playStore;
      return;
    }
    // Desktop: stay on page and show QR / links
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
      style={{ background: 'linear-gradient(135deg, #094C31 0%, #101010 100%)' }}
    >
      {/* Logo */}
      <Image
        src="/images/ecocan-logo.png"
        alt="ECOCAN"
        width={120}
        height={48}
        className="mb-10 opacity-90"
      />

      {/* Headline */}
      <p className="section-overline text-white/60 mb-4">Get the app</p>
      <h1
        className="text-white font-bold mb-4"
        style={{ fontSize: 'clamp(32px, 5vw, 56px)', lineHeight: 1.1 }}
      >
        Scan. Return. Get paid.
      </h1>
      <p className="text-white/70 text-lg max-w-[520px] mb-12">
        Download the ECOCAN app to verify drinks, find collection points, and
        collect your deposit reward, instantly.
      </p>

      {/* CTA buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-14">
        <Link
          href={STORE_URLS.appStore}
          target="_blank"
          rel="noopener noreferrer"
          className="pill-btn pill-btn-white gap-2"
        >
          <Download size={18} />
          App Store
        </Link>
        <Link
          href={STORE_URLS.playStore}
          target="_blank"
          rel="noopener noreferrer"
          className="pill-btn pill-btn-outline !border-white/40 !text-white hover:!bg-white/10"
        >
          <Download size={18} />
          Google Play
        </Link>
      </div>

      {/* Trust badges */}
      <div className="flex flex-wrap justify-center gap-3">
        {['Early-stage funded', 'Operational in Kenya', 'GDPR Compliant'].map((badge) => (
          <span key={badge} className="glass-pill text-white/80 text-[13px] px-4 py-1.5">
            {badge}
          </span>
        ))}
      </div>

      {/* Back link */}
      <Link href="/" className="mt-10 text-white/40 text-sm hover:text-white/80 transition-colors">
        -�� Back to home
      </Link>
    </div>
  );
}
