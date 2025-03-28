import { color as c } from "../color.ts";

const symbolSemantic: Semantic = {
  scope: ["punctuation", "meta.brace", "keyword.operator"],
  settings: {
    foreground: c.color8,
  },
};

/**
 * default token scope
 * link: https://github.com/microsoft/vscode/blob/main/src/vs/workbench/services/themes/common/colorThemeData.ts
 */
const tokenGroupSemantic: TokenGroupSemantic = {
  comments: {
    scope: ["comment", "punctuation.definition.comment"],
    foreground: c.color6,
  },
  strings: {
    scope: ["string", "meta.embedded.assembly"],
    foreground: "#1aa38f",
  },
  keywords: {
    scope: [
      "keyword - keyword.operator",
      "keyword.control",
      "storage",
      "storage.type",
    ],
    foreground: "#c975af",
  },
  numbers: {
    scope: ["constant.numeric"],
    foreground: "#61ad86",
  },
  types: {
    scope: [
      "entity.name.type",
      "entity.name.class",
      "support.type",
      "support.class",
    ],
    foreground: "#c48656",
  },
  functions: {
    scope: ["entity.name.function", "support.function"],
    foreground: "#7c89f0",
  },
  variables: {
    scope: ["variable", "entity.name.variable"],
    foreground: "#aa88c8",
  },
};

const generateTokenSemantics = () => {
  const semantics: Semantic[] = [];

  for (const key in tokenGroupSemantic) {
    if (Object.prototype.hasOwnProperty.call(tokenGroupSemantic, key)) {
      const name = key as TokenGroupKey;
      const scope = tokenGroupSemantic[name].scope;
      const foreground = tokenGroupSemantic[name].foreground;

      semantics.push({
        name,
        scope,
        settings: {
          foreground,
        },
      });
    }
  }

  return semantics;
};

const tokenSemantic = generateTokenSemantics();

export { symbolSemantic, tokenSemantic, tokenGroupSemantic };
