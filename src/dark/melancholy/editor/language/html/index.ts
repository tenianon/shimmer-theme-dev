import { color as c, semanticTokenColor as stc } from '../../../color.ts';

export const colorHTML = {
  tag: '#d97189',
  character: '#80a341',
} as const;

export const semanticHTML: Editor.SemanticTokenMap = {
  'class:html': {
    foreground: stc.class,
  },
};

export const scopeHTML: Editor.Scope[] = [
  {
    scope: ['text.html.derivative meta.tag'],
    settings: {
      foreground: colorHTML.tag,
    },
  },
  {
    scope: ['entity.other.attribute-name'],
    settings: {
      foreground: c.color8,
    },
  },
  {
    scope: ['text.html.derivative'],
    settings: {
      foreground: c.color9,
    },
  },
  {
    scope: ['punctuation.definition.entity', 'constant.character.entity'],
    settings: {
      foreground: colorHTML.character,
    },
  },
];
