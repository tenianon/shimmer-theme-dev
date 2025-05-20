import {
  editorSemanticTokenColorCustomizations,
  editorTokenColorCustomizations,
} from './editor/index.ts';
import { workbenchColorCustomizations } from './workbench/index.ts';
import { hexToLightness } from '../../utils/culori.ts';

const lightnessArray = [0, -5, 5];

const themeList: Theme[] = [];

lightnessArray.forEach((degree) => {
  let name = 'shimmer-theme-dark-neutral-block';
  const type = 'dark';
  const colors = workbenchColorCustomizations;
  const semanticHighlighting = true;

  const semanticTokenColors = structuredClone(
    editorSemanticTokenColorCustomizations,
  );
  const tokenColors = structuredClone(editorTokenColorCustomizations);
  let label = 'Shimmer Theme Dark Neutral Block';
  const uiTheme = 'vs-dark';

  const lightness = (degree / 100) as Parameters<typeof hexToLightness>[1];

  if (degree) {
    name += '_' + degree;
    label += ' ' + String(degree).padStart(2, '0');

    for (const token in semanticTokenColors) {
      const key = token as keyof typeof semanticTokenColors;
      semanticTokenColors[key].foreground = hexToLightness(
        semanticTokenColors[key].foreground,
        lightness,
      );
    }

    for (let i = 0; i < tokenColors.length; i++) {
      tokenColors[i].settings.foreground = hexToLightness(
        tokenColors[i].settings.foreground,
        lightness,
      );
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

export const neutralBlock = themeList;
