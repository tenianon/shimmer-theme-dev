import { semanticTokenColor as stc } from '../../../color.ts';
import { colorHTML } from '../html/color.ts';
import { colorReact } from '../jsx/color.ts';
import { colorVue } from '../vue/color.ts';

export const go: Editor.Scopes[] = [
  {
    scope: ['source.go entity.name.type.package.go'],
    settings: {
      foreground: colorHTML.tag,
    },
  },
  {
    scope: ['source.go keyword'],
    settings: {
      foreground: stc.keyword,
    },
  },
  {
    scope: ['source.go variable.parameter.go'],
    settings: {
      foreground: stc.parameter,
    },
  },
  {
    scope: ['source.go entity.name.type.go'],
    settings: {
      foreground: stc.typeParameter,
    },
  },
  {
    scope: ['source.go storage.type', 'source.go entity.name.type.any.go'],
    settings: {
      foreground: stc.type,
    },
  },
  {
    scope: ['source.go keyword'],
    settings: {
      foreground: stc.keyword,
    },
  },
];
