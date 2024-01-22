const path = require('path');

module.exports = function override(config, env) {
  // Adicione o fallback para path-browserify
  config.resolve.fallback = {
    ...config.resolve.fallback,
    "path": require.resolve("path-browserify")
  };

  return config;
};
