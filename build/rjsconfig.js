module.exports = {
  appDir: 'dev',            
  baseUrl: 'js/app',     
  dir: 'dist',             
  wrap: true,
  //optimize: "none",
  fileExclusionRegExp: /(^build)|(.idea)|(gulpfile.js)|(gulp.sh)|(package.json)|(tmod)|(less)$/,
  optimizeCss: 'standard', /* none|standard|standard.keepLines|standard.keepComments|standard.keepComments.keepLines */
  removeCombined: true,
  waitSeconds: 10
};