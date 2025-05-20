import { semanticTokenColor as stc, color as c } from '../../../color.ts';
import { colorHTML } from '../html/index.ts';
import { semanticC } from '../c/index.ts';

export const semanticCpp: Editor.SemanticTokenMap = {
  'templateType:cpp': {
    foreground: colorHTML.tag,
  },
  'enum:cpp': {
    foreground: semanticC['enum:c'].foreground,
  },
  'enumMember:cpp': {
    foreground: semanticC['enumMember:c'].foreground,
  },
};

export const scopeCpp: Editor.Scope[] = [
  {
    scope: ['source.cpp'],
    settings: {
      foreground: c.color9,
    },
  },
  {
    scope: [
      'source.cpp keyword.other.using.directive.cpp',
      'source.cpp keyword.other.typedef.cpp',
      'source.cpp keyword.operator.sizeof.cpp',
    ],
    settings: {
      foreground: stc.keyword,
    },
  },
  {
    scope: ['source.cpp keyword.other.unit'],
    settings: {
      foreground: stc.number,
    },
  },
  {
    scope: [
      'entity.name.function.operator.member.cpp',
      'entity.name.function.operator.cpp',
      'source.cpp storage.modifier.reference.cpp',
      'source.cpp storage.modifier.pointer.cpp',
    ],
    settings: {
      foreground: c.color8,
    },
  },
  {
    scope: ['source.cpp keyword.operator.cast'],
    settings: {
      foreground: stc.enum,
    },
  },
];
