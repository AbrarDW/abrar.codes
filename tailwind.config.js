/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      transitionProperty: {
        height: 'height',
        width: 'width',
        spacing: 'margin, padding'
      },
      transitionDuration: {
        0: '0ms',
        2000: '2000ms'
      },
      colors: {
        php: '#8892bf',
        laravel: '#ff2d20',
        angular: '#f44336',
        javascript: '#f8dc3d',
        vue: '#4fc08d',
        mysql: '#f29221',
        nest: '#ea2845',
        mongo: '#00ed64',
        node: '#026e00',
        ts: '#3178c6',
        js: '#fcdc00',
        nuxt: '#00dc82',
        redis: '#a32422',
        rmq: '#ff6600',
        git: '#6e40c9',
        jira: '#0052cc',
        jest: '#15c213'
      }
    }
  },
  variants: {
    transitionProperty: ['responsive', 'hover', 'focus'],
    margin: ['responsive', 'hover', 'focus', 'last'],
    width: ['responsive', 'hover', 'focus'],
    justifyContent: ['responsive', 'hover', 'focus']
  },
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
