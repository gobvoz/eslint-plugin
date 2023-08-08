'use strict';

const { RuleTester } = require('eslint');
const rule = require('../../../lib/rules/path-checker');

const ruleTester = new RuleTester();
ruleTester.run('path-checker', rule, {
  valid: [
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: '',
      errors: [{ message: 'Fill me in.', type: 'Me too' }],
    },
  ],
});
