import { createPlugin } from "stylelint";
import { namespace } from "./namespace";
import { Rules } from "../types";

export const pluginCreator = (rules: Rules) =>
  Object.keys(rules).map((ruleName) =>
    createPlugin(namespace(ruleName), rules[ruleName])
  );
