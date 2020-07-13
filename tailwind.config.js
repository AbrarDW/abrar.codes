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
        '0': '0ms',
        '2000': '2000ms',
      }
    }
  },
  variants: {
    transitionProperty: ['responsive', 'hover', 'focus'],
    margin: ['responsive', 'hover', 'focus', 'last'],
    width: ['responsive', 'hover', 'focus'],
    justifyContent: ['responsive', 'hover', 'focus'],
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
      'nuxt.config.js',
    ],
  },
}
