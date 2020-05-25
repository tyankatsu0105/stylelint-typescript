import { pluginCreator, PLUGIN_NAME } from "./utils";
import { rules } from "./rules";

export = pluginCreator(PLUGIN_NAME, rules);
