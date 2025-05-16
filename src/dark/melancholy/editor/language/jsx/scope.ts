import { color as c } from '../../../color.ts';
import { colorReact } from './color.ts';
import { colorHTML } from '../html/color.ts';

export const jsx: Editor.Scopes[] = [
  {
    scope: ['support.class.component'],
    settings: {
      foreground: colorReact.component,
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
