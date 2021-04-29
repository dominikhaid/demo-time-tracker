const nextConfig = {
  reactStrictMode: true,
  compress: true,
  api: {
    externalResolver: true,
  },
  basePath: '/app',
  images: {
    domains: ['localhost'],
    path: '/app/_next/image',
    loader: 'default',
    deviceSizes: [640, 1080, 1200, 1920, 3840],
    imageSizes: [128, 384],
  },
  // serverRuntimeConfig: {
  //   mySecret: 'secret',
  //   secondSecret: process.env.SECOND_SECRET,
  // },
  // publicRuntimeConfig: {
  //   staticFolder: '/public',
  // },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = nextConfig;
