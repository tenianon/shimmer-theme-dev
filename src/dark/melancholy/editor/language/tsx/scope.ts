import { semanticTokenColor as stc } from '../../../color.ts';

export const tsx: Editor.Scopes[] = [
  {
    scope: [
      'support.type.builtin.tsx',
      'support.type.primitive.tsx',
      'meta.type.parameters.tsx',
      'entity.name.type.tsx',
      'entity.other.inherited-class.tsx',
      'entity.name.type.module.tsx',
    ],
    settings: {
      foreground: stc.type,
    },
  },
  {
    scope: ['entity.name.type.class.tsx', 'entity.other.inherited-class.tsx'],
    settings: {
      foreground: stc.class,
    },
  },
];
