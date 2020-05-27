// eslint-disable-next-line @typescript-eslint/no-var-requires
const getTestRule = require("jest-preset-stylelint/getTestRule");

export const testRule = getTestRule({ plugins: ["./lib/index.ts"] });
