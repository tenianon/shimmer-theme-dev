import {
  formatHex,
  formatHex8,
  parseTransparent,
  interpolate,
  parse,
  differenceEuclidean,
  wcagContrast,
  converter,
  parseOklch,
  oklch,
  
} from 'culori';

import {
  color as c,
  semanticTokenColor as stc,
} from '../src/dark/melancholy/color.ts';


import {
  color as cn,
  semanticTokenColor as stcn,
} from '../src/dark/neutral/color.ts';

import { hexAlpha, hexToLightness, hexToChroma } from '../src/utils/culori.ts';

// console.log(Color(c.primary).lighten(0.33).hex());


const inp = interpolate(
  [
   c.color4,
   c.color5
  ],
  'oklch',
);


const inpn = interpolate(
  [
   cn.color4,
   cn.color5
  ],
  'oklch',
);







console.log(formatHex(inp(0.5)))
console.log(formatHex(inpn(0.5)))
