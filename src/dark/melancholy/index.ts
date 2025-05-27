import {
  getWorkbenchConfig,
  getSemanticsConfig,
  getScopesConfig,
} from '../../core/index.ts';

export const melancholy: ThemeConfig = {
  brightness: [0, 5, 10],
  colors: getWorkbenchConfig(),
  name: 'melancholy',
  semanticTokenColors: getSemanticsConfig(),
  tokenColors: getScopesConfig(),
  type: 'dark',
  uiTheme: 'vs-dark',
};
