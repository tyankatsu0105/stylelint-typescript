export const NamespaceCreator = (pluginName: string) =>
  function namespace(ruleName: string) {
    return `${pluginName}/${ruleName}`;
  };
