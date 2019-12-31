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
      '/styles/prefers_reduced_motion': { page: '/styles/prefers_reduced_motion' },
      '/styles/prefers_color_scheme': { page: '/styles/prefers_color_scheme' },
      '/styles/backdrop_filter/': { page: '/styles/backdrop_filter' },
      '/styles/is': { page: '/styles/is' },
      '/styles/houdini_paint_api': { page: '/styles/houdini_paint_api' }
    }
  }
}
