import {
  getWorkbenchBlockConfig,
  getSemanticsConfig,
  getSyntaxConfig,
  baseBlockColor,
  baseSemanticColor,
} from '../../core/index.ts';
import { color } from '../neutral/index.ts';

export const neutralBlock: ThemeConfig = {
  brightness: [-2, 0, 5, 10],
  colors: getWorkbenchBlockConfig(baseBlockColor(color)),
  name: 'neutral-block',
  semanticTokenColors: getSemanticsConfig(color, baseSemanticColor(color)),
  tokenColors: getSyntaxConfig(color, baseSemanticColor(color)),
  type: 'dark',
  uiTheme: 'vs-dark',
};
