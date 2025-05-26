import {
  getWorkbenchConfig,
  getSemanticsConfig,
  getScopesConfig,
} from '../../core/index.ts';

export const melancholy: ThemeConfig = {
  name: 'melancholy',
  type: 'dark',
  uiTheme: 'vs-dark',
  brightness: [0, 5, 10],
  colors: getWorkbenchConfig(),
  semanticTokenColors: getSemanticsConfig(),
  tokenColors: getScopesConfig(),
};
