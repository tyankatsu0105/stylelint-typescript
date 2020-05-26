/**
 * Note: If jest-preset-stylelint supports ts-node, this process is not necessary.
 */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const getTestRule = require("jest-preset-stylelint/getTestRule");

export const testRule = getTestRule({ plugins: ["./dist/lib"] });
