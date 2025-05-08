import { color as c, semanticTokenColor as stc } from '../../../color.ts';

export const scss: Editor.Scopes[] = [
  {
    scope: ['entity.name.tag.reference.scss', 'meta.property-list.scss'],
    settings: {
      foreground: c.color8,
    },
  },
  {
    scope: [
      'meta.attribute-selector.scss',
      'meta.at-rule.include.scss support.constant.mathematical-symbols.scss',
      'meta.at-rule.include.scss keyword.operator.scss',
      'meta.at-rule.include.scss',
      'meta.at-rule.each.scss',
      'meta.at-rule.each.scss keyword.operator.css',
      'meta.at-rule.each.scss support.constant.mathematical-symbols.scss',
    ],
    settings: {
      foreground: stc.string,
    },
  },
  {
    scope: [
      'support.constant.mathematical-symbols.scss',
      'meta.property-value.scss',
    ],
    settings: {
      foreground: stc.type,
    },
  },
  {
    scope: [
      'meta.at-rule.mixin.scss',
      'meta.at-rule.if.scss',
      'keyword.other.default.scss',
    ],
    settings: {
      foreground: stc.keyword,
    },
  },
  {
    scope: ['meta.property-name.scss'],
    settings: {
      foreground: stc.string,
    },
  },
  {
    scope: ['variable.scss'],
    settings: {
      foreground: stc.class,
    },
  },
  {
    scope: [
      'meta.at-rule.keyframes.scss entity.other.attribute-name.scss',
      'support.constant.vendored.property-value.scss',
    ],
    settings: {
      foreground: stc.number,
    },
  },
  {
    scope: ['meta.at-rule.media.scss', 'meta.definition.variable.scss'],
    settings: {
      foreground: stc.property,
    },
  },
  {
    scope: ['meta.at-rule.extend.scss'],
    settings: {
      foreground: stc.namespace,
    },
  },
  {
    scope: [
      'source.css.scss entity.other.attribute-name.parent-selector-suffix.css punctuation.definition.entity.css',
    ],
    settings: {
      foreground: stc.variable,
    },
  },
];
