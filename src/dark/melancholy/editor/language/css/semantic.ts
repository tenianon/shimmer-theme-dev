import { color } from "../../../color.ts";
import { tokenGroupSemantic as token } from "../../public-semantic.ts";

export const css: Semantic[] = [
  {
    scope: [
      "punctuation.definition.entity.css",
      "punctuation.definition.entity.begin.bracket.square.css",
      "punctuation.definition.entity.end.bracket.square.css",
    ],
    settings: {
      foreground: color.color8,
    },
  },
  {
    scope: ["keyword.other.important.css"],
    settings: {
      foreground: "#d97189",
    },
  },
  {
    scope: [
      "entity.other.attribute-name.class.css",
      "entity.other.attribute-name.id.css",
      "entity.name.tag.css",
      "entity.other.attribute-name.css",
    ],
    settings: {
      foreground: token.variables.foreground,
    },
  },
  {
    scope: ["meta.property-value.css"],
    settings: {
      foreground: "#bc9b5a",
    },
  },
  {
    scope: [
      "support.type.property-name.css",
      "support.type.vendored.property-name.css",
    ],
    settings: {
      foreground: "#689fc4",
    },
  },
  {
    scope: [
      "support.type.property-name.media.css",
      "meta.at-rule.media.header.css",
    ],
    settings: {
      foreground: token.functions.foreground,
    },
  },
  {
    scope: ["constant.other.color.rgb-value.hex.css"],
    settings: {
      foreground: token.strings.foreground,
    },
  },
  {
    scope: ["keyword.other.unit"],
    settings: {
      foreground: color.color9,
    },
  },
  {
    scope: ["entity.name.tag.wildcard.css", "meta.selector.css"],
    settings: {
      foreground: color.color8,
    },
  },
  {
    scope: ["variable.css", "variable.argument.css"],
    settings: {
      foreground: "#bf8286",
    },
  },
  {
    scope: [
      "entity.other.attribute-name.pseudo-element.css",
      "entity.other.attribute-name.pseudo-class.css",
      "entity.name.tag.custom.css",
      "entity.other.keyframe-offset.percentage.css",
    ],
    settings: {
      foreground: token.types.foreground,
    },
  },
  {
    scope: ["string.unquoted.attribute-value.css"],
    settings: {
      foreground: "#6cae63",
    },
  },
  {
    scope: ["entity.other.keyframe-offset.css"],
    settings: {
      foreground: token.keywords.foreground,
    },
  },
];
