module.exports = {
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/events-app/'
    : '/',
  css: {
    loaderOptions: {
      scss: {
        prependData: `
            @import "~@/styles/variables.scss";
            @import "~bulma/sass/utilities/_all.sass";
          `
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
