import chroma from 'chroma-js';
import { interpolate, formatHex } from 'culori';
import { baseColor } from '../src/core/color.ts';

console.log(chroma('oklch(12% 0.2 21)').alpha(0.1).darken(0.5).css('oklch'));

export const c = {
  primary: '#755ade',
  color0: '#0a0b0a',
  color1: '#070707',
  color2: '#171717',
  'color2.25': '#1b1b1b',
  'color2.5': '#1f1f1f',
  color3: '#272727',
  'color3.5': '#2f2f2f',
  color4: '#373737',
  'color4.5': '#3f3f3f',
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

console.log(chroma.mix(c.color2, baseColor.color3, 0.25, 'rgb').hex());
console.log(chroma.mix(c.color2, baseColor.color3, 0.5, 'rgb').hex());
console.log(chroma.mix(c.color2, baseColor.color3, 0.75, 'rgb').hex());
console.log(chroma.mix(c.color3, baseColor.color4, 0.5, 'rgb').hex());
console.log(chroma.mix(c.color4, baseColor.color5, 0.5, 'rgb').hex());
console.log('-------------');
console.log(formatHex(interpolate([c.color2, baseColor.color3])(0.25)));
console.log(formatHex(interpolate([c.color2, '#292929'])(0.25)));
console.log(formatHex(interpolate([c.color2, baseColor.color3])(0.75)));
console.log(formatHex(interpolate([c.color3, baseColor.color4])(0.5)));
console.log(formatHex(interpolate([c.color4, baseColor.color5])(0.5)));
