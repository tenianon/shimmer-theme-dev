import { formatHex, formatHex8 ,interpolate, parse, differenceEuclidean } from 'culori';

import Color from 'color'


const c = 'oklch(71.7% 0.25 360)';
const type = parse('#bf8286');
const namespace = parse('#c48656');

const gradient = interpolate(['#949c5d', '#bf8286'], 'oklch')(1)



console.log(formatHex(gradient));
gradient.l -= 2;

console.log(formatHex(gradient));

console.log(Color('#bf8286').darken(0.3).hex())

