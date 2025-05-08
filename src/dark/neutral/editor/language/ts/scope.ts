import { semanticTokenColor as stc } from '../../../color.ts';

export const ts: Editor.Scopes[] = [
  {
    scope: [
      'support.type.builtin.ts',
      'support.type.primitive.ts',
      'support.type.ts',
      'meta.type.annotation.ts',
      'meta.type.parameters.ts',
      'meta.type.function.return.ts',
      'meta.return.type.ts',
      'entity.name.type.ts',
      'entity.name.type.alias.ts',
      'entity.name.type.module.ts',
    ],
    settings: {
      foreground: stc.type,
    },
  },
  {
    scope: [
      'support.class.ts',
      'entity.name.type.class.ts',
      'entity.other.inherited-class.ts',
    ],
    settings: {
      foreground: stc.class,
    },
  },
];
