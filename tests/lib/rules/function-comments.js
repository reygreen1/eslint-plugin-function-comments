'use strict';
// https://eslint.org/docs/developer-guide/nodejs-api#ruletester
const { RuleTester } = require('eslint');

const rule = require('../../../lib/rules/function-comments');

const ruleTester = new RuleTester({
  parserOptions: { ecmaVersion: 2018 }
});

ruleTester.run('function-comments', rule, {
  valid: [
    `
      /**
       * Returns the sum of a and b
       * @param {number} a
       * @param {number} b
       * @returns {number}
       */
      function sum(a, b) {
          return a + b;
      }
    `
  ],
  invalid: [
    {
      code: `
        function sum1(a, b) {
          return a + b;
        }
      `,
      errors: [{ message: 'Function sum1 need JSDoc comments.' }]
    },
    {
      code: `
        // function sum
        function sum2(a, b) {
          return a + b;
        }
      `,
      errors: [{ message: 'Function sum2 need JSDoc comments.' }]
    }
  ]
});
