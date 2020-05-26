import { namespace } from "./namespace";
import { Rule } from "../types";

type Messages<TMessages extends string> = {
  [key in TMessages]: string;
};

export const RuleCreator = () =>
  function createRule<TMessages extends string>({
    name,
    messages,
    rule,
  }: {
    name: string;
    messages: Messages<TMessages>;
    rule: Rule<Messages<TMessages>>;
  }) {
    rule.ruleName = namespace(name);
    rule.messages = messages;
    return rule;
  };
