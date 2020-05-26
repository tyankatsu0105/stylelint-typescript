import { NamespaceCreator } from "../../../lib/utils/namespace-creator";

describe("NamespaceCreator", () => {
  it("when input plugin name, return namespace function", () => {
    const pluginName = "plugin";
    const ruleName = "rule";

    const mockFn = jest.fn(NamespaceCreator);

    const namespace = mockFn(pluginName);

    const result = namespace(ruleName);

    expect(result).toEqual("plugin/rule");
    expect(mockFn).toHaveBeenCalled();
    expect(mockFn).toHaveBeenCalledWith(pluginName);
  });
});
