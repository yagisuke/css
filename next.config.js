const path = require('path')

module.exports = {
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '~': path.resolve(__dirname, './src')
    }
    return config
  },
  exportPathMap: async () => {
    return {
      '/': { page: '/' },
      '/styles/scroll_snap': { page: '/styles/scroll_snap' },
      '/styles/focus_within': { page: '/styles/focus_within' },
      '/styles/media_prefers': { page: '/styles/media_prefers' },
      '/styles/is': { page: '/styles/is' }
    }
  }
}
