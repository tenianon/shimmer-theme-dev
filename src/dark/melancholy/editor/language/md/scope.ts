import {
  color as c,
  semanticTokenColor as stc,
  webColor as wc,
} from '../../../color.ts';

export const md: Editor.Scopes[] = [
  {
    scope: ['meta.paragraph.markdown'],
    settings: {
      foreground: c.color9,
    },
  },
  {
    scope: [
      'text.html.markdown punctuation.definition.heading.markdown',
      'text.html.markdown entity.name.section.markdown',
    ],
    settings: {
      foreground: stc.function,
    },
  },
  {
    scope: [
      'text.html.markdown punctuation.definition.bold.markdown',
      'text.html.markdown markup.bold.markdown',
    ],
    settings: {
      foreground: stc.parameter,
      fontStyle: 'bold',
    },
  },
  {
    scope: ['text.html.markdown markup.bold.markdown'],
    settings: {
      fontStyle: 'bold',
    },
  },
  {
    scope: [
      'text.html.markdown punctuation.definition.italic.markdown',
      'text.html.markdown markup.italic.markdown',
    ],
    settings: {
      foreground: stc.type,
      fontStyle: 'italic',
    },
  },
  {
    scope: [
      'text.html.markdown punctuation.definition.strikethrough.markdown',
      'text.html.markdown markup.strikethrough.markdown',
    ],
    settings: {
      foreground: stc.typeParameter,
      fontStyle: 'strikethrough',
    },
  },
  {
    scope: ['text.html.markdown punctuation.definition.list.begin.markdown'],
    settings: {
      foreground: stc.number,
    },
  },
  {
    scope: [
      'text.html.markdown punctuation.definition.quote.begin.markdown',
      'text.html.markdown markup.quote.markdown meta.paragraph.markdown',
    ],
    settings: {
      foreground: wc.reactComponent,
    },
  },
  {
    scope: [
      'text.html.markdown markup.underline.link.markdown',
      'text.html.markdown markup.underline.link.image.markdown',
    ],
    settings: {
      foreground: stc.property,
    },
  },
  {
    scope: [
      'text.html.markdown punctuation.definition.link.description',
      'text.html.markdown punctuation.definition.metadata.markdown',
      'text.html.markdown punctuation.definition.link.title',
    ],
    settings: {
      foreground: stc.keyword,
    },
  },
  {
    scope: [
      'text.html.markdown punctuation.definition.raw.markdown',
      'text.html.markdown markup.inline.raw.string.markdown',
    ],
    settings: {
      foreground: stc.variable,
    },
  },
  {
    scope: [
      'text.html.markdown punctuation.definition.markdown',
      'text.html.markdown fenced_code.block.language.markdown',
    ],
    settings: {
      foreground: stc.class,
    },
  },

  {
    scope: [
      'text.html.markdown punctuation.separator.table.markdown',
      'text.html.markdown punctuation.definition.table.markdown',
    ],
    settings: {
      foreground: wc.vueComponent,
    },
  },
  {
    scope: ['text.html.markdown meta.separator.markdown'],
    settings: {
      foreground: wc.character,
    },
  },
  {
    scope: [
      'text.html.markdown constant.character.escape.markdown',
      'text.html.markdown punctuation.definition.math',
    ],
    settings: {
      foreground: stc.keyword,
    },
  },
  {
    scope: ['text.html.markdown meta.embedded.math.markdown'],
    settings: {
      foreground: stc.namespace,
    },
  },
];
