import {
  editorSemanticTokenColorCustomizations,
  editorTokenColorCustomizations,
} from './editor/index.ts';
import { workbenchColorCustomizations } from './workbench/index.ts';
import chroma from 'chroma-js';

const brightnessArray = [0, 5, 10, 15, 20];

const themeList: Theme[] = [];

brightnessArray.forEach((brightness) => {
  let name = 'shimmer-theme-dark-melancholy';
  const type = 'dark';
  const colors = workbenchColorCustomizations;
  const semanticHighlighting = true;

  const semanticTokenColors = structuredClone(
    editorSemanticTokenColorCustomizations,
  );
  const tokenColors = structuredClone(editorTokenColorCustomizations);
  let label = 'Shimmer Theme Dark Melancholy';
  const uiTheme = 'vs-dark';

  const value = brightness / 100;



  
  if (brightness) {
    name += '_' + brightness;
    label += ' ' + String(brightness).padStart(2, '0');

    for (const token in semanticTokenColors) {
      const key = token as keyof typeof semanticTokenColors;
      semanticTokenColors[key].foreground = chroma(
        semanticTokenColors[key].foreground,
      )
        .brighten(value)
        .hex();
    }

    for (let i = 0; i < tokenColors.length; i++) {
      tokenColors[i].settings.foreground = chroma(
        tokenColors[i].settings.foreground,
      )
        .brighten(value)
        .hex();
    }
  }

  const theme: Theme = {
    name,
    type,
    colors,
    semanticHighlighting,
    semanticTokenColors,
    tokenColors,
    label,
    uiTheme,
  };

  themeList.push(theme);
});

export const melancholy = themeList;
