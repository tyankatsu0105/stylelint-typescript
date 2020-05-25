import { utils } from "stylelint";
import { createRule, namespace } from "../utils";

const ruleName = namespace("hoge");

const messages = {
  expected: "aaa",
};

export = createRule({
  name: "hoge",
  messages,
  rule(actual) {
    return (root, result) => {
      const validOptions = utils.validateOptions(result, ruleName, { actual });

      if (!validOptions) {
        return;
      }

      root.walkDecls(/^background/, (decl) => {
        const { value } = decl;

        if (!/data:image.*base64/.test(value)) {
          return;
        }

        utils.report({
          message: messages.expected,
          node: decl,
          result,
          ruleName,
        });
      });
    };
  },
});
