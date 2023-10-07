const path = require('path');

/** @type {import('orval').Options} */
module.exports = {
  backend: {
    output: {
      mode: 'single',
      prettier: true,

      client: 'angular',
      target: path.resolve(__dirname, './src/query.ts'),
    },

    input: {
      target: require.resolve('../swagger.json')
    }
  }
};
