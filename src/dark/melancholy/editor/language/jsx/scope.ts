import { color as c } from '../../../color.ts';
import { colorJSX } from './color.ts';
import { colorHTML } from '../html/color.ts';

export const scopeJSX: Editor.Scopes[] = [
  {
    scope: ['support.class.component'],
    settings: {
      foreground: colorJSX.component,
    },
  },
  {
    scope: ['entity.name.tag'],
    settings: {
      foreground: colorHTML.tag,
    },
  },
  {
    scope: ['meta.jsx.children'],
    settings: {
      foreground: c.color9,
    },
  },
];
