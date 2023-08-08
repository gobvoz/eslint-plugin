'use strict';

module.exports = {
  meta: {
    messages: {
      description: 'Unexpected import path `{{path}}`.',
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

        context.report({
          node,
          messageId: 'description',
          data: {
            path: importPath,
          },
        });
      },
    };
  },
};
