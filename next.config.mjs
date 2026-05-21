/** @type {import('next').NextConfig} */
const nextConfig = {
  // ESLint: run during builds but only fail on real errors, not warnings.
  // This ensures stray lint warnings (e.g. react-hooks/exhaustive-deps)
  // never silently break a production deployment.
  eslint: {
    // Run ESLint during `next build` (default behaviour preserved)
    ignoreDuringBuilds: false,
  },

  // Security headers for all routes
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(self)",
          },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://va.vercel-scripts.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: blob: https:",
              "media-src 'self' https:",
              "connect-src 'self' https://vitals.vercel-insights.com https://va.vercel-scripts.com",
              "frame-ancestors 'none'",
            ].join("; "),
          },
        ],
      },
    ]
  },

  // Image optimisation
  images: {
    formats: ["image/avif", "image/webp"],
    // Breakpoints that map to our responsive layouts
    deviceSizes: [640, 768, 1024, 1280, 1536],
    imageSizes: [48, 96, 128, 256, 384],
    remotePatterns: [],
  },
}

export default nextConfig
