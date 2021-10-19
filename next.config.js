const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  i18n: {
    locales: ['en', 'en-US', 'en-SV'],
    defaultLocale: 'en',
  },
  trailingSlash: true,
});
