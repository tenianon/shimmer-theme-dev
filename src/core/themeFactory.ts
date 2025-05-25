import { mergedScope } from '../utils/merged.ts';

import chroma from 'chroma-js';

export function themeFactory(config: ThemeConfig): Theme[] {
  const themeList: Theme[] = [];

  const type = config.type;

  const semanticHighlighting = true;

  const uiTheme = config.uiTheme;

  config.brightness?.forEach((level) => {
    let name = `shimmer-theme-${config.type}-${config.name}`;

    let label = name
      .split('-')
      .map((s) => s[0].toUpperCase() + s.slice(1))
      .join(' ');

    let colors: Workbench | null = config.colors;

    let include: string | null = null;

    const semanticTokenColors = structuredClone(config.semanticTokenColors);

    const tokenColors = structuredClone(mergedScope(config.tokenColors));

    if (level) {

      colors = null

      include = `./${name}.json`

      const ratio = level / 10;

      name += '_' + level;

      label += ' ' + String(level).padStart(2, '0');

      for (const token in semanticTokenColors) {
        const key = token as keyof typeof semanticTokenColors;
        semanticTokenColors[key].foreground = chroma(
          semanticTokenColors[key].foreground,
        )
          .brighten(ratio)
          .hex();
      }

      for (let i = 0; i < tokenColors.length; i++) {
        tokenColors[i].settings.foreground = chroma(
          tokenColors[i].settings.foreground,
        )
          .brighten(ratio)
          .hex();
      }
    }

    const theme: Theme = structuredClone({
      name,
      include,
      type,
      colors,
      semanticHighlighting,
      semanticTokenColors,
      tokenColors,
      label,
      uiTheme,
    });

    themeList.push(theme);
  });

  return themeList;
}
