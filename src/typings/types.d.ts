declare type Color = {
  [key: string]: string;
};

declare type UiTheme = "vs" | "vs-dark" | "hc-black" | "hc-light";

declare interface Theme {
  name: string;
  type: "light" | "dark";
  colors: WorkbenchColorCustomizations;
  tokenColors: Semantic[];
  label: string;
  uiTheme: UiTheme;
}
