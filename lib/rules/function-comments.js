'use strict';
module.exports = {
  // meta 的规则说明
  // https://cn.eslint.org/docs/developer-guide/working-with-rules#rule-basics
  meta: {
    type: 'layout',
    docs: {
      description: 'Function needs JSDoc comments.',
      category: 'Best Practices',
      recommended: true
    },
    // https://cn.eslint.org/docs/developer-guide/working-with-rules#options-schemas
    schema: []
  },
  create: function (context) {
    const sourceCode = context.getSourceCode();

    return {
      FunctionDeclaration(node) {
        if (!sourceCode.getJSDocComment(node)) {
          // 函数没有 JSDoc 注释
          context.report({
            node,
            message: `Function ${node.id.name} need JSDoc comments.`
          });
        }
      }
    };
  }
};