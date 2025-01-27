'use client';

import { useEffect } from 'react';

const STORE_URLS = {
  playStore: "https://play.google.com/store/apps/details?id=com.superapp.ecocanapp",
  appStore: "https://apps.apple.com/app/6502695438",
  fallback: "https://ecocan.africa/download"
};

export default function DownloadRedirect() {
  useEffect(() => {
    const detectDeviceAndRedirect = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      
      // iOS detection
      if (/iphone|ipad|ipod/.test(userAgent)) {
        window.location.href = STORE_URLS.appStore;
        return;
      }
      
      // Android detection
      if (/android/.test(userAgent)) {
        window.location.href = STORE_URLS.playStore;
        return;
      }
      
      // Desktop users stay on the page to see the QR code
    };

    detectDeviceAndRedirect();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center p-4">
        <h1 className="text-xl font-semibold mb-4">Redirecting to EcocanApp...</h1>
        <p className="text-gray-600">If you are not redirected automatically, please click:</p>
        <div className="space-y-4 mt-4">
          <a href={STORE_URLS.appStore} className="block text-blue-600 hover:underline" target='_blank'>
            Download on App Store
          </a>
          <a href={STORE_URLS.playStore} className="block text-blue-600 hover:underline" target='_blank'>
            Get it on Play Store
          </a>
        </div>
      </div>
    </div>
  );
}