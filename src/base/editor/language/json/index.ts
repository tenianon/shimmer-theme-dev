import { semanticTokenColor as stc } from '../../../color.ts';

export const scopeJSON: Editor.Scope[] = [
  {
    scope: ['support.type.property-name.json'],
    settings: {
      foreground: stc.property,
    },
  },
];
