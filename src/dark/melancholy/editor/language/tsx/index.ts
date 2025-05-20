import { semanticTokenColor as stc } from '../../../color.ts';

export const semanticTSX: Editor.SemanticTokenMap = {
  'class:typescriptreact': {
    foreground: stc.class,
  },
};


export const scopeTSX: Editor.Scope[] = [
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
