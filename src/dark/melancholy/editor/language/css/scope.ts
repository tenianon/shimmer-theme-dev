import { color as c, semanticTokenColor as stc } from '../../../color.ts';
import { colorVue } from '../vue/color.ts';
import { colorHTML } from '../html/color.ts';

export const css: Editor.Scopes[] = [
  {
    scope: [
      'punctuation.definition.entity.css',
      'punctuation.definition.entity.begin.bracket.square.css',
      'punctuation.definition.entity.end.bracket.square.css',
      'entity.other.attribute-name.attribute.css',
      'variable.parameter.misc.css',
    ],
    settings: {
      foreground: c.color8,
    },
  },
  {
    scope: [
      'entity.other.attribute-name.class',
      'entity.other.attribute-name.id',
      'entity.other.attribute-name.placeholder',
      'entity.other.attribute-name.parent-selector-suffix punctuation.definition.entity',
    ],
    settings: {
      foreground: stc.variable,
    },
  },
  {
    scope: [
      'support.type.property-name',
      'support.type.property-name.media',
      'meta.at-rule.media.header',
      'meta.property-name',
    ],
    settings: {
      foreground: stc.property,
    },
  },
  {
    scope: [
      'support.constant.color.w3c-standard-color-name.css',
      'support.constant.property-value',
      'meta.property-value',
    ],
    settings: {
      foreground: stc.parameter,
    },
  },
  {
    scope: ['meta.function.gradient.invalid.deprecated.gradient'],
    settings: {
      foreground: stc.function,
    },
  },
  {
    scope: [
      'keyword.operator.logical.and.media',
      'keyword.other.important',
      'keyword.other.important punctuation.separator',
      'keyword.operator.gradient',
      'invalid.deprecated.function',
    ],
    settings: {
      foreground: stc.keyword,
    },
  },
  {
    scope: [
      'constant.other.color.rgb-value',
      'support.constant.font-name',
      'variable.parameter.url',
    ],
    settings: {
      foreground: stc.string,
    },
  },
  {
    scope: [
      'entity.other.attribute-name.pseudo-element',
      'entity.other.attribute-name.pseudo-class',
    ],
    settings: {
      foreground: stc.type,
    },
  },
  {
    scope: ['support.constant.parity'],
    settings: {
      foreground: colorHTML.character,
    },
  },
  {
    scope: [
      'meta.at-rule.keyframes.body',
      'meta.attribute-selector entity.other.attribute-name',
    ],
    settings: {
      foreground: colorVue.component,
    },
  },
  {
    scope: ['support.constant.media', 'variable.parameter.keyframe-list'],
    settings: {
      foreground: stc.namespace,
    },
  },
  {
    scope: ['variable.argument.css', 'variable.css'],
    settings: {
      foreground: stc.class,
    },
  },
  {
    scope: ['meta.at-rule.header', 'meta.at-rule.import', 'meta.at-rule.else'],
    settings: {
      foreground: stc.enum,
    },
  },
];
