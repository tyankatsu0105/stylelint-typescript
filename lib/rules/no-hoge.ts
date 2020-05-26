import { utils } from "stylelint";
import { createRule, namespace } from "../utils";

const ruleName = namespace("no-hoge");

const messages = {
  expected: "Can't use .hoge",
};

export = createRule({
  name: "no-hoge",
  messages,
  rule(actual) {
    return (root, result) => {
      const validOptions = utils.validateOptions(result, ruleName, { actual });

      if (!validOptions) {
        return;
      }

      root.walkRules((atRule) => {
        const { selector } = atRule;

        if (!/^\.hoge/.test(selector)) {
          return;
        }

        utils.report({
          message: messages.expected,
          node: atRule,
          result,
          ruleName,
        });
      });
    };
  },
});
