import { semanticTokenColor as stc, color as c } from '../../../color.ts';
import { colorHTML } from '../html/index.ts';

export const semanticC: Editor.SemanticTokenMap = {
  'macro:c': {
    foreground: stc.class,
  },
  'enum:c': {
    foreground: stc.typeParameter,
  },
  'enumMember:c': {
    foreground: stc.typeParameter,
  },
};

export const scopeC: Editor.Scope[] = [
  {
    scope: ['source.c'],
    settings: {
      foreground: c.color9,
    },
  },
  {
    scope: ['source.c keyword.other.typedef.c'],
    settings: {
      foreground: stc.keyword,
    },
  },
  {
    scope: [
      'source.c keyword.operator.sizeof.c',
      'source.c storage.type.class.doxygen.c',
    ],
    settings: {
      foreground: stc.namespace,
    },
  },
  {
    scope: ['source.c constant.character.escape.line-continuation.c'],
    settings: {
      foreground: colorHTML.character,
    },
  },

  {
    scope: ['source.c meta.parens.block.c'],
    settings: {
      foreground: stc.enum,
    },
  },
];
