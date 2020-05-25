import { createPlugin, Plugin } from "stylelint";
import { namespace } from "./namespace";

type Rules = {
  [k: string]: Plugin;
};

export const pluginCreator = (pluginName: string, rules: Rules) =>
  Object.keys(rules).map((ruleName) =>
    createPlugin(namespace(ruleName, pluginName), rules[ruleName])
  );
