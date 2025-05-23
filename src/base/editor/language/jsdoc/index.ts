import { semanticTokenColor as stc } from '../../../color.ts';

export const scopeJSDoc: Editor.Scope[] = [
  {
    scope: ['storage.type.class.jsdoc'],
    settings: {
      foreground: stc.namespace,
    },
  },
  {
    scope: ['variable.other.link.underline.jsdoc'],
    settings: {
      foreground: stc.comment,
    },
  },
  {
    scope: ['entity.name.type.instance.jsdoc'],
    settings: {
      foreground: stc.type,
    },
  },
  {
    scope: ['variable.other.jsdoc'],
    settings: {
      foreground: stc.parameter,
    },
  },
];
