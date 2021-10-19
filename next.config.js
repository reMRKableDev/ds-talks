const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  eslint: {
    dirs: ['pages', 'lib', 'hooks', 'components'],
  },
  i18n: {
    locales: ['en', 'en-US', 'en-SV'],
    defaultLocale: 'en',
  },
  trailingSlash: true,
});
