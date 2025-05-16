import { color as c } from '../../../color.ts';
import { colorHTML } from "./color.ts";

export const html: Editor.Scopes[] = [
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
