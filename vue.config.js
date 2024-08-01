module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "node_modules/@ifxglobal/my-global-design-tokens/tokens.scss";',
        sassOptions: {
          quietDeps: true
        }
      }
    }
  }
}
