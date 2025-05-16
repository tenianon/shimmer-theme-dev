import { semanticTokenColor as stc } from '../../../color.ts';
import { colorHTML } from '../html/color.ts';

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
      foreground: stc.namespace,
    },
  },
  {
    scope: ['source.go storage.type'],
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
