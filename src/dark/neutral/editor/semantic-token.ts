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
  'class:html': {
    foreground: stc.class,
  },
  'class.declaration:vue': {
    foreground: stc.class,
  },
  'class:javascript': {
    foreground: stc.class,
  },
  'class:typescript': {
    foreground: stc.class,
  },
  'class:typescriptreact': {
    foreground: stc.class,
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

const semanticToken = semanticTokenMap;

export { semanticToken };
