import { semanticTokenColor as stc } from '../../../color.ts';

export const colorVue = {
  component: '#5aab81',
} as const;

export const semanticVue: Editor.SemanticTokenMap = {
  'class.declaration:vue': {
    foreground: stc.class,
  },
};

export const scopeVue: Editor.Scope[] = [
  {
    scope: [
      'source.vue meta.tag.other entity.name.tag',
      'source.vue meta.tag.custom entity.name.tag',
    ],
    settings: {
      foreground: colorVue.component,
    },
  },
];
