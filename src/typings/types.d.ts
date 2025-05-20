declare type Color = {
  [key: string]: string;
};

declare type UiTheme = 'vs' | 'vs-dark' | 'hc-black' | 'hc-light';

declare interface Theme {
  name: string;
  type: 'light' | 'dark';
  colors?: WorkbenchColorCustomizations;
  semanticHighlighting?: boolean;
  semanticTokenColors?: Editor.Semantic;
  tokenColors?: Editor.Scope[];
  label: string;
  uiTheme: UiTheme;
}
