import { semanticTokenColor as stc } from '../../../color.ts';

export const semanticVue: Editor.SemanticTokenMap = {
  'class.declaration:vue': {
    foreground: stc.class,
  },
};
