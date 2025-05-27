import {
  getSemanticsConfig,
  getScopesConfig,
  getWorkbenchBlockConfig,
  baseBlockColor,
} from '../../core/index.ts';

export const melancholyBlock: ThemeConfig = {
  brightness: [0, 5, 10],
  colors: getWorkbenchBlockConfig(baseBlockColor()),
  name: 'melancholy-block',
  semanticTokenColors: getSemanticsConfig(),
  tokenColors: getScopesConfig(),
  type: 'dark',
  uiTheme: 'vs-dark',
};
