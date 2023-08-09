'use strict';

const shouldBeRelative = require('../helper/should-be-relative');

module.exports = {
  meta: {
    messages: {
      description: 'import should be relative in the same slice',
    },
    type: 'problem', // `problem`, `suggestion`, or `layout`
    docs: {
      description: 'feature sliced design path checker',
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create(context) {
    return {
      ImportDeclaration(node) {
        const importPath = node.source.value;
        const filePath = context.getFilename();

        if (shouldBeRelative(filePath, importPath)) {
          context.report({
            node,
            messageId: 'description',
            data: {
              path: importPath,
            },
          });
        }
      },
    };
  },
};
