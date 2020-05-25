import { Plugin } from "stylelint";
import { namespace } from "./namespace";

type Messages<TMessages extends string> = {
  [key in TMessages]: string;
};

export const RuleCreator = (pluginName: string) =>
  function createRule<TMessages extends string>({
    name,
    messages,
    rule,
  }: {
    name: string;
    messages: Messages<TMessages>;
    rule: Plugin & {
      ruleName?: string;
      messages?: Messages<TMessages>;
    };
  }) {
    rule.ruleName = namespace(name, pluginName);
    rule.messages = messages;
    return rule;
  };
