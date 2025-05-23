import chroma from "chroma-js";

import { color as c } from '../src/dark/melancholy/color.ts'

console.log(chroma('oklch(12% 0.2 21)').alpha(0.1).darken(0.5).css('oklch'));

console.log(chroma(c.color4).alpha(0.6).hex())
