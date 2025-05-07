import { semanticTokenColor as stc } from "../../../color.ts";

export const js: Editor.Scopes[] = [
  {
    scope: [
      "constant.language",
      "keyword.operator.expression",
      "keyword.operator.new",
      "meta.class meta.method.declaration entity.name.type.module",
      "meta.class meta.method.declaration support.type.builtin",
      "entity.name.label",
    ],
    settings: {
      foreground: stc.keyword,
    },
  },
  {
    scope: [
      "variable.other.property",
      "variable.other.object.property",
      "support.variable.property",
      "meta.object-literal.key",
    ],
    settings: {
      foreground: stc.property,
    },
  },
  {
    scope: ["support.type.object.module"],
    settings: {
      foreground: stc.variable,
    },
  },
  {
    scope: ["constant.language.infinity", "constant.language.nan"],
    settings: {
      foreground: stc.number,
    },
  },
];
