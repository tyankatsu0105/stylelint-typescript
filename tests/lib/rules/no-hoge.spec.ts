import { testRule } from "../../utils";

import rule from "../../../lib/rules/no-hoge";

testRule({
  ruleName: rule.ruleName,

  accept: [
    {
      code: ".fuga {}",
    },
  ],

  reject: [
    {
      code: ".hoge {}",
      message: rule.messages?.expected,
      line: 1,
      column: 1,
    },
  ],
});
