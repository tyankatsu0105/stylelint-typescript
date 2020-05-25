import { PLUGIN_NAME } from "../utils";

export const namespace = (ruleName: string, pluginName: string = PLUGIN_NAME) =>
  `${pluginName}/${ruleName}`;
