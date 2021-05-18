module.exports = {
  lintOnSave: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/events-app/'
    : '/',
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/styles/variables.scss";`
      }
    }
  },
  pages: {
    index: {
      entry: 'src/main.ts',
      title: 'Animal Rescue League'
    }
  }
}
