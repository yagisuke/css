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
<<<<<<< HEAD
      '/styles/houdini_paint_api': { page: '/styles/houdini_paint_api' },
      '/styles/houdini_properties_and_values_api': { page: '/styles/houdini_properties_and_values_api' },
      '/tags/input_lab': { page: '/tags/input_lab' }
=======
      '/styles/houdini_properties_and_values_api': { page: '/styles/houdini_properties_and_values_api' },
      '/styles/houdini_typed_om': { page: '/styles/houdini_typed_om' },
      '/styles/houdini_paint_api': { page: '/styles/houdini_paint_api' }
>>>>>>> b35def90a84c2c829a5abc4c0b841ec1c824b480
    }
  }
}
