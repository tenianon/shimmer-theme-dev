import { editorTokenColorCustomizations } from "./editor/index.ts";
import { workbenchColorCustomizations } from "./workbench/index.ts";

export const melancholy: Theme = {
  name: "shimmer-theme-dark-melancholy",
  type: "dark",
  colors: workbenchColorCustomizations,
  tokenColors: editorTokenColorCustomizations,
  label: 'Shimmer Theme Dark Melancholy',
  uiTheme: 'vs-dark'
};