import {
  getSemanticsConfig,
  getScopesConfig,
  getWorkbenchBlockConfig,
  baseBlockColor,
} from '../../core/index.ts';

export const melancholyBlock: ThemeConfig = {
  name: 'melancholy-block',
  type: 'dark',
  uiTheme: 'vs-dark',
  brightness: [0, 5, 10],
  colors: getWorkbenchBlockConfig(baseBlockColor()),
  semanticTokenColors: getSemanticsConfig(),
  tokenColors: getScopesConfig(),
};
