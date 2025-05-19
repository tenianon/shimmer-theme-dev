import { semanticTokenColor as stc, color as c } from '../../../color.ts';
import { colorHTML } from '../html/color.ts';

export const scopePy: Editor.Scopes[] = [
  {
    scope: [
      'source.python constant.other.ellipsis.python',
      'source.python constant.character.format.placeholder.other.python',
    ],
    settings: {
      foreground: c.color8,
    },
  },
  {
    scope: [
      'source.python string.quoted.docstring.multi.python keyword.control.flow.python',
    ],
    settings: {
      foreground: stc.string,
    },
  },
  {
    scope: ['source.python meta.attribute.python'],
    settings: {
      foreground: stc.property,
    },
  },
  {
    scope: ['source.python support.variable.magic.python'],
    settings: {
      foreground: stc.variable,
    },
  },
  {
    scope: ['source.python keyword.operator.logical'],
    settings: {
      foreground: stc.keyword,
    },
  },
  {
    scope: ['source.python constant.character.escape.python'],
    settings: {
      foreground: colorHTML.character,
    },
  },
  {
    scope: ['source.python meta.function-call.generic.python'],
    settings: {
      foreground: stc.function,
    },
  },
  {
    scope: ['source.python support.type.metaclass.python'],
    settings: {
      foreground: stc.class,
    },
  },
  {
    scope: ['source.python meta.indexed-name.python'],
    settings: {
      foreground: stc.variable,
    },
  },
];
