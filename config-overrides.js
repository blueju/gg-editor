/**
 * react-app-rewired
 * https://github.com/timarney/react-app-rewired
 */

module.exports = function override(config, env) {
  // https://www.webpackjs.com/concepts/
  if (env === 'production') {
    config.output.publicPath = 'https://blueju.github.io/ggeditor/build/';
  }
  return config;
};
