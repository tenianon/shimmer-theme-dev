import { themeFactory } from './core/themeFactory.ts';
import { melancholy } from './dark/melancholy/index.ts';
import { melancholyBlock } from './dark/melancholy-block/index.ts';
import { neutral } from './dark/neutral/index.ts';
import { neutralBlock } from './dark/neutral-block/index.ts';
import { modern } from './dark/modern/index.ts';

const themeConfigList: ThemeConfig[] = [
  melancholy,
  melancholyBlock,
  neutral,
  neutralBlock,
  modern
];

export const themes: Theme[] = [];

themeConfigList.forEach((item) => {
  themes.push(...themeFactory(item));
});
