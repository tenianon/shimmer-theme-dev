import {
  getWorkbenchConfig,
  getSemanticsConfig,
  getSyntaxConfig,
} from '../../core/index.ts';

export const melancholy: ThemeConfig = {
  brightness: [0, 5, 10],
  colors: getWorkbenchConfig(),
  name: 'melancholy',
  semanticTokenColors: getSemanticsConfig(),
  tokenColors: getSyntaxConfig(),
  type: 'dark',
  uiTheme: 'vs-dark',
};
