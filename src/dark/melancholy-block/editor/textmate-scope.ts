import { color as c, semanticTokenColor as stc } from '../color.ts';

/**
 * Fallback TextMate Scope
 * link: https://github.com/microsoft/vscode/blob/main/src/vs/workbench/services/themes/common/colorThemeData.ts#L34
 */
const tokenGroupScopesMap: Editor.TokenGroupScopesMap = {
  comments: {
    scope: ['comment', 'punctuation.definition.comment'],
    foreground: stc.comment,
  },
  strings: {
    scope: ['string', 'meta.embedded.assembly'],
    foreground: stc.string,
  },
  keywords: {
    scope: [
      'keyword - keyword.operator',
      'keyword.control',
      'storage',
      'storage.type',
    ],
    foreground: stc.keyword,
  },
  numbers: {
    scope: ['constant.numeric'],
    foreground: stc.number,
  },
  functions: {
    scope: ['entity.name.function', 'support.function'],
    foreground: stc.function,
  },
  variables: {
    scope: ['variable', 'entity.name.variable'],
    foreground: stc.variable,
  },
  // types: {
  //   scope: [
  //     "entity.name.type",
  //     "entity.name.class",
  //     "support.type",
  //     "support.class",
  //   ],
  //   foreground: stc.type,
  // },
};

const symbolScope: Editor.Scope = {
  scope: [
    'punctuation',
    'meta.brace',
    'keyword.operator',
    'storage.type.function.arrow',
    'constant.language.import-export-all',
  ],
  settings: {
    foreground: c.color8,
  },
};

const scopes: Editor.Scope[] = [];

const generateTextMateScopes = () => {
  for (const key in tokenGroupScopesMap) {
    if (Object.prototype.hasOwnProperty.call(tokenGroupScopesMap, key)) {
      const name = key as Editor.SemanticTokenKey;
      const scope = tokenGroupScopesMap[name].scope;
      const foreground = tokenGroupScopesMap[name].foreground;
      const fontStyle = tokenGroupScopesMap[name].fontStyle;

      scopes.push({
        name,
        scope,
        settings: {
          ...(fontStyle ? { fontStyle } : {}),
          foreground,
        },
      });
    }
  }

  return scopes;
};

const defaultTokenScopes = generateTextMateScopes();

export { symbolScope, defaultTokenScopes, tokenGroupScopesMap };
