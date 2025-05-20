import { melancholy } from './dark/melancholy/index.ts';
import { melancholyBlock } from './dark/melancholy-block/index.ts';
import { neutral } from './dark/neutral/index.ts';
import { neutralBlock } from './dark/neutral-block/index.ts';

export const themes = [
  ...melancholy,
  ...melancholyBlock,
  ...neutral,
  ...neutralBlock,
];
