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
      '/houdini': { page: '/houdini' },
      '/houdini/paint_api': { page: '/houdini/paint_api' },
      '/houdini/paint_api/non_polyfill': { page: '/houdini/paint_api/non_polyfill' },
      '/houdini/paint_api/add_polyfill': { page: '/houdini/paint_api/add_polyfill' },
      '/houdini/paint_api/simple_animation': { page: '/houdini/paint_api/simple_animation' },
      '/houdini/paint_api/ripple_animation': { page: '/houdini/paint_api/ripple_animation' },
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
      '/tags/input_date_lab/adjust_input_date': { page: '/tags/input_date_lab/adjust_input_date' },
      '/tags/input_date_lab/input_mode': { page: '/tags/input_date_lab/input_mode' },
      '/tags/input_date_lab/input_mode_variation': { page: '/tags/input_date_lab/input_mode_variation' }
    }
  }
}
