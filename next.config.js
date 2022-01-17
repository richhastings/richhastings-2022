const path = require('path')

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `
      @import '~include-media/dist/_include-media.scss';
      @import 'settings';
    `,
  },
  reactStrictMode: true,
}
