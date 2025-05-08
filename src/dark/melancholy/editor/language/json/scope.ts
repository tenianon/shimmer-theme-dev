import { semanticTokenColor as stc } from '../../../color.ts';

export const json: Editor.Scopes[] = [
  {
    scope: ['support.type.property-name.json'],
    settings: {
      foreground: stc.property,
    },
  },
];
