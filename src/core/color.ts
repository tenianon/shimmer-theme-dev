import chroma from 'chroma-js';

export const baseColor: Color = {
  primary: '#8565ff',
  color0: '#0a0b0a',
  color1: '#1a1b1a',
  color2: '#2a2b2a',
  color3: '#3a3b3a',
  color4: '#4a4b4a',
  color5: '#5a5b5a',
  color6: '#6a6b6a',
  color7: '#7a7b7a',
  color8: '#8a8b8a',
  color9: '#9a9b9a',
  color10: '#aaabaa',
  color11: '#babbba',
  color12: '#cacbca',
  color13: '#dadbda',
  color14: '#eaebea',
  color15: '#fafbfa',
};

export const baseBlockColor = (color = baseColor): Color => {
  return {
    ...color,
    'color2.25': chroma.mix(color.color2, color.color3, 0.25, 'rgb').hex(),
    'color2.5': chroma.mix(color.color2, color.color3, 0.5, 'rgb').hex(),
    'color2.75': chroma.mix(color.color2, color.color3, 0.75, 'rgb').hex(),
    'color3.25': chroma.mix(color.color3, color.color4, 0.25, 'rgb').hex(),
    'color3.5': chroma.mix(color.color3, color.color4, 0.5, 'rgb').hex(),
    'color4.5': chroma.mix(color.color4, color.color5, 0.5, 'rgb').hex(),
  };
};

export const baseSemanticColor = (
  color = baseColor,
): Record<string, string> & Partial<Record<Editor.BaseSemanticKey, string>> => {
  return {
    variable: '#a980cd',
    parameter: '#ba9959',
    keyword: '#c27cb3',
    string: '#1aa38f',
    comment: color.color6,
    function: '#7c89f0',
    method: '#7c89f0',
    property: '#689fc8',
    number: '#62a193',
    class: '#4495eb',
    interface: '#bf8286',
    type: '#bf8286',
    namespace: '#c28455',
    typeParameter: '#6ca371',
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
};

export const baseLanguageColor = {
  html: {
    tag: '#d97189',
    character: '#80a341',
  },
  jsx: {
    component: '#149eca',
  },
  vue: {
    component: '#5aab81',
  },
  py: {
    classBuiltin: '#149dc9',
  },
} as const;
