// const withPWA = require('next-pwa');

// module.exports = withPWA({
// 	pwa: {
// 		dest: 'public',
// 		register: true,
// 		skipWaiting: true
// 	}
// });
// const withPWA = require('next-pwa');

// module.exports = withPWA({
//   pwa: {
//     dest: 'public',
//     register: true,
//     skipWaiting: true,
//     // Other PWA configuration options go here
//   },
// });
/** @type {import('next').NextConfig} */
const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
  buildExcludes: [/middleware-manifest.json$/],
  disable: process.env.NODE_ENV === "development",
});

const nextConfig = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
});
module.exports = nextConfig;