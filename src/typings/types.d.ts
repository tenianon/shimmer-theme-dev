declare type UiTheme = 'vs' | 'vs-dark' | 'hc-black' | 'hc-light';

declare interface Theme {
  name: string;
  include?: string;
  type: 'light' | 'dark';
  colors?: Workbench;
  semanticHighlighting?: boolean;
  semanticTokenColors?: Editor.Semantic;
  tokenColors?: Editor.Scope[];
  label?: string;
  uiTheme: UiTheme;
}

declare interface ThemeConfig extends Theme {
  brightness?: number[]
}