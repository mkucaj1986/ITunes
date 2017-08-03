module.exports = {
  appDir: 'dev',            
  baseUrl: 'js/app',     
  dir: 'dist',             
  wrap: true,
  modules: [
    {
      name: 'home/home'
    }
  ],
  //optimize: "none",
  fileExclusionRegExp: /(^build)|(.idea)|(gulpfile.js)|(gulp.sh)|(package.json)|(tmod)|(less)$/,
  optimizeCss: 'standard', /* none|standard|standard.keepLines|standard.keepComments|standard.keepComments.keepLines */
  removeCombined: true,

  paths: {
    jquery: "../lib/jquery"
  },

  waitSeconds: 10
};