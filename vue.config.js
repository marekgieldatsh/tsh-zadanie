module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "./node_modules/sass-rem/_rem.scss";
          @import "./src/styles/_variables.scss";
        `
      }
    }
  }
};
