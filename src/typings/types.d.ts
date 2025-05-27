declare type UiTheme = 'hc-black' | 'hc-light' | 'vs-dark' | 'vs';

declare interface Theme {
  colors?: Workbench;
  include?: string;
  label?: string;
  name: string;
  semanticHighlighting?: boolean;
  semanticTokenColors?: Editor.Semantic;
  tokenColors?: Editor.Scope[];
  type: 'dark' | 'light';
  uiTheme: UiTheme;
}

declare interface ThemeConfig extends Theme {
  brightness?: number[];
}
