import {
  editorSemanticTokenColorCustomizations,
  editorTokenColorCustomizations,
} from "./editor/index.ts";
import { workbenchColorCustomizations } from "./workbench/index.ts";

export const neutral: Theme = {
  name: "shimmer-theme-dark-neutral",
  type: "dark",
  colors: workbenchColorCustomizations,
  semanticHighlighting: true,
  semanticTokenColors: editorSemanticTokenColorCustomizations,
  tokenColors: editorTokenColorCustomizations,
  label: "Shimmer Theme Dark Neutral",
  uiTheme: "vs-dark",
};
