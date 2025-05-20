import { semanticTokenColor as stc } from '../color.ts';

/**
 * Semantic token scope map
 * link: https://code.visualstudio.com/api/language-extensions/semantic-highlight-guide#semantic-token-scope-map
 */
const semanticTokenMap: Editor.SemanticTokenMap = {
  variable: {
    foreground: stc.variable,
  },
  parameter: {
    foreground: stc.parameter,
  },
  keyword: {
    foreground: stc.keyword,
  },
  string: {
    foreground: stc.string,
  },
  comment: {
    foreground: stc.comment,
  },
  function: {
    foreground: stc.function,
  },
  method: {
    foreground: stc.method,
  },
  property: {
    foreground: stc.property,
  },
  number: {
    foreground: stc.number,
  },
  interface: {
    foreground: stc.interface,
  },
  type: {
    foreground: stc.type,
  },
  namespace: {
    foreground: stc.namespace,
  },
  typeParameter: {
    foreground: stc.typeParameter,
  },
  enum: {
    foreground: stc.enum,
  },
  enumMember: {
    foreground: stc.enumMember,
  },
  // class: {
  //   foreground: stc.class,
  // }
  // decorator: {
  //   foreground: stc.decorator,
  // },
  // event: {
  //   foreground: stc.event,
  // },
  // label: {
  //   foreground: stc.label,
  // },
  // macro: {
  //   foreground: stc.macro,
  // },
  // operator: {
  //   foreground: stc.operator,
  // },
  // regexp: {
  //   foreground: stc.regexp,
  // },
  // struct: {
  //   foreground: stc.struct,
  // },
};

const defaultSemanticTokens = semanticTokenMap;

export { defaultSemanticTokens };
