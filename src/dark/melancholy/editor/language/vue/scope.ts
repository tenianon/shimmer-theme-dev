import { colorVue } from './color.ts';

export const scopeVue: Editor.Scopes[] = [
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
