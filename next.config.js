module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  sassOptions: {
    prependData: `
      @import '~include-media/dist/_include-media.scss';
    `,
  },
  reactStrictMode: true,
}
