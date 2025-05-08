export const color: Color = {
  primary: '#d25499',
  color0: '#0a0b0a',
  color1: '#070707',
  color2: '#171717',
  color3: '#272727',
  color4: '#373737',
  color5: '#474747',
  color6: '#575757',
  color7: '#676767',
  color8: '#777777',
  color9: '#878787',
  color10: '#979797',
  color11: '#a7a7a7',
  color12: '#b7b7b7',
  color13: '#c7c7c7',
  color14: '#d7d7d7',
  color15: '#e7e7e7',
} as const;

export const webColor: Color = {
  tag: '#d97189',
  character: '#6fa125',
  vueComponent: '#5ead82',
  reactComponent: '#149eca',
} as const;

export const semanticTokenColor: {
  [key in Editor.SemanticTokenKey]?: string;
} = {
  variable: '#aa88c8',
  parameter: '#bc9b5a',
  keyword: '#c975af',
  string: '#1aa38f',
  comment: color.color6,
  function: '#7c89f0',
  method: '#7c89f0',
  property: '#689fc8',
  number: '#82a092',
  class: '#b575ed',
  interface: '#bf8286',
  type: '#bf8286',
  namespace: '#c48656',
  typeParameter: '#5ead82',
  enum: '#389fad',
  enumMember: '#389fad',
  decorator: '#ff0000',
  event: '#ff0000',
  label: '#ff0000',
  macro: '#ff0000',
  operator: '#ff0000',
  regexp: '#ff0000',
  struct: '#ff0000',
};
