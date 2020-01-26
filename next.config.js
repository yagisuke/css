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
      '/styles/houdini_paint_api': { page: '/styles/houdini_paint_api' },
      '/styles/houdini_properties_and_values_api': { page: '/styles/houdini_properties_and_values_api' },
      '/tags/input_date_lab': { page: '/tags/input_date_lab' },
      '/tags/input_date_lab/before': { page: '/tags/input_date_lab/before' },
      '/tags/input_date_lab/input_variation': { page: '/tags/input_date_lab/input_variation' },
      '/tags/input_date_lab/vs_selectbox': { page: '/tags/input_date_lab/vs_selectbox' },
      '/tags/input_date_lab/result': { page: '/tags/input_date_lab/result' },
      '/tags/input_date_lab/input_mode': { page: '/tags/input_date_lab/input_mode' }
    }
  }
}
