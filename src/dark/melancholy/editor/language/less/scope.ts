import { color as c, semanticTokenColor as stc } from '../../../color.ts';

export const less: Editor.Scopes[] = [
  {
    scope: ['punctuation.definition.entity.less'],
    settings: {
      foreground: c.color8,
    },
  },
  {
    scope: ['support.constant.color.w3c-special-color-keyword.less'],
    settings: {
      foreground: stc.parameter,
    },
  },
  {
    scope: ['support.other.variable.less'],
    settings: {
      foreground: stc.class,
    },
  },
  {
    scope: ['support.constant.media.less'],
    settings: {
      foreground: stc.namespace,
    },
  },
  {
    scope: ['keyword.operator.logic.media.less'],
    settings: {
      foreground: stc.keyword,
    },
  },
];
