export const color: Color = {
  primary: "#8565ff",
  color0: "#0a0b0a",
  color1: "#1a1b1a",
  color2: "#2a2b2a",
  color3: "#3a3b3a",
  color4: "#4a4b4a",
  color5: "#5a5b5a",
  color6: "#6a6b6a",
  color7: "#7a7b7a",
  color8: "#8a8b8a",
  color9: "#9a9b9a",
  color10: "#aaabaa",
  color11: "#babbba",
  color12: "#cacbca",
  color13: "#dadbda",
  color14: "#eaebea",
  color15: "#fafbfa",
} as const;

export const webColor: Color = {
  tag: "#d97189",
  character: "#6fa125",
  vueComponent: "#62B587",
  reactComponent: "#149eca",
} as const;


export const semanticTokenColor: {
  [key in Editor.SemanticTokenKey]?: string;
} = {
  variable: "#aa88c8",
  parameter: "#bc9b5a",
  keyword: "#c975af",
  string: "#1aa38f",
  comment: color.color6,
  function: "#7c89f0",
  method: "#7c89f0",
  property: "#689fc8",
  number: "#61ad86",
  class: "#b575ed",
  interface: "#bf8286",
  type: "#bf8286",
  namespace: "#c48656",
  typeParameter: "#389fad",
  enum: "#82a092",
  enumMember: "#82a092",
  decorator: "#ff0000",
  event: "#ff0000",
  label: "#ff0000",
  macro: "#ff0000",
  operator: "#ff0000",
  regexp: "#ff0000",
  struct: "#ff0000",
};