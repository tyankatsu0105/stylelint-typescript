import { namespace } from "../../../lib/utils/namespace";

describe("namespace", () => {
  it("when input rule name, return string combined plugin name and rule name", () => {
    const ruleName = "rule";

    const result = namespace(ruleName);

    expect(result).toEqual("@tyankatsu0105/rule");
  });
});
