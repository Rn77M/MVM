<<<<<<< HEAD
const path = require('path');

module.exports = function override(config, env) {
  // Adicione o fallback para path-browserify
  config.resolve.fallback = {
    ...config.resolve.fallback,
    "path": require.resolve("path-browserify")
  };

  return config;
};
=======
const path = require('path');

module.exports = function override(config, env) {
  // Adicione o fallback para path-browserify
  config.resolve.fallback = {
    ...config.resolve.fallback,
    "path": require.resolve("path-browserify")
  };

  return config;
};
>>>>>>> 4ebef2686478c62f2abe8693579836a40389621a
