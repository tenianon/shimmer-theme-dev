import { themeFactory } from './core/themeFactory.ts';
import { melancholyBlock } from './dark/melancholy-block/index.ts';
import { melancholy } from './dark/melancholy/index.ts';
import { modern } from './dark/modern/index.ts';
import { neutralBlock } from './dark/neutral-block/index.ts';
import { neutral } from './dark/neutral/index.ts';

const themeConfigList: ThemeConfig[] = [
  melancholy,
  melancholyBlock,
  neutral,
  neutralBlock,
  modern,
];

export const themes = themeConfigList.flatMap(themeFactory);
