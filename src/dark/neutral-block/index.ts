import {
  getWorkbenchBlockConfig,
  getSemanticsConfig,
  getScopesConfig,
  baseBlockColor,
  baseSemanticColor,
} from '../../core/index.ts';

import { color } from '../neutral/index.ts';

export const neutralBlock: ThemeConfig = {
  name: 'neutral-block',
  type: 'dark',
  uiTheme: 'vs-dark',
  brightness: [-2, 0, 5, 10],
  colors: getWorkbenchBlockConfig(baseBlockColor(color)),
  semanticTokenColors: getSemanticsConfig(baseSemanticColor(color)),
  tokenColors: getScopesConfig(color, baseSemanticColor(color)),
};
