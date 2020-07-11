/**
 * react-app-rewired
 * https://github.com/timarney/react-app-rewired
 */

module.exports = function override(config, env) {
  // https://www.webpackjs.com/concepts/
  if (env === 'production' && process.env.REACT_APP_deployTarget === 'github') {
    config.output.publicPath = 'https://blueju.github.io/ggeditor/build/';
  }
  return config;
};
