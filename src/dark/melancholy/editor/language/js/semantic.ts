import { color } from "../../../color.ts";
import { tokenGroupSemantic as token } from "../../public-semantic.ts";

export const js: Semantic[] = [
  {
    scope: [
      "meta.object-literal.key",
      "variable.other.property",
      "variable.object.property",
      "support.variable.property",
    ],
    settings: {
      foreground: "#689fc4",
    },
  },
  {
    name: "js keywords",
    scope: [
      "keyword.operator.expression",
      "variable.language",
      "constant.language",
      "keyword.operator.new",
    ],
    settings: {
      foreground: token.keywords.foreground,
    },
  },
  {
    scope: ["storage.type.function.arrow"],
    settings: {
      foreground: color.color8,
    },
  },
  {
    scope: ["variable.parameter"],
    settings: {
      foreground: "#6dab68",
    },
  },
  {
    scope: ["entity.other.inherited-class"],
    settings: {
      foreground: token.types.foreground,
    },
  },
  {
    scope: ["support.function"],
    settings: {
      foreground: "#bc9b5a",
    },
  },
  {
    scope: ["support.constant"],
    settings: {
      foreground: "#bc9b5a",
    },
  },
  {
    name: "jsdoc",
    scope: ["variable.other.jsdoc"],
    settings: {
      foreground: "#6cae63",
    },
  },
  {
    name: "jsdoc",
    scope: [
      "entity.name.type.instance.jsdoc",
      "variable.other.description.jsdoc",
    ],
    settings: {
      foreground: "#bf8286",
    },
  },
];
