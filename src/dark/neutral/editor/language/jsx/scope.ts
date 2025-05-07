import { color as c, webColor as wc } from "../../../color.ts";

export const jsx: Editor.Scopes[] = [
  {
    scope: ["support.class.component"],
    settings: {
      foreground: wc.reactComponent,
    },
  },
  {
    scope: ["entity.name.tag"],
    settings: {
      foreground: wc.tag,
    },
  },
  {
    scope: ["meta.jsx.children"],
    settings: {
      foreground: c.color9,
    },
  },
];
