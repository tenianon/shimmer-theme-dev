import { color } from "../../../color.ts";
import { tokenGroupSemantic as token } from "../../public-semantic.ts";

export const jsx: Semantic[] = [
  {
    scope: ["support.class.component"],
    settings: {
      foreground: "#149eca",
    },
  },
  {
    scope: ["entity.name.type.class"],
    settings: {
      foreground: token.types.foreground,
    },
  },
  {
    scope: ["meta.jsx.children"],
    settings: {
      foreground: color.color9,
    },
  },
];
