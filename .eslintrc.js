'use strict';

export default {
  root: true,
  extends: ['eslint:recommended', 'plugin:eslint-plugin/recommended', 'plugin:node/recommended'],
  env: {
    node: true,
  },
  overrides: [
    {
      files: ['tests/**/*.js'],
      env: { mocha: true },
    },
  ],
};
