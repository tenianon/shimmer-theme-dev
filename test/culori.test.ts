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

import { hexAlpha, hexToLightness, hexToChroma } from '../src/utils/culori.ts';

// console.log(Color(c.primary).lighten(0.33).hex());

const inp = interpolate(['#1aa38f', '#689fc8'], 'oklch');

console.log(formatHex(inp(0.5)));
