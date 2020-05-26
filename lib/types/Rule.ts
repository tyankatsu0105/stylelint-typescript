import { Plugin } from "stylelint";

export type Rule<T> = Plugin & {
  ruleName?: string;
  messages?: T;
};

export type Rules = {
  [k: string]: Rule<unknown>;
};
