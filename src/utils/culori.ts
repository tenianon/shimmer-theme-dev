import { parse, formatHex8, oklch, formatHex } from 'culori';

type AlphaRange<T extends number> = `${T}` extends
  | '0'
  | '1'
  | `0.${number}`
  | '-1'
  | `-0.${number}`
  ? T
  : never;

type LightnessRange<T extends number> = AlphaRange<T>;

type ChromaRange<T extends number> = `${T}` extends
  | '0'
  | `0.${number}`
  | `-0.${number}`
  ? T
  : never;

type HueRange = number;

export const transparent = '#00000000';

export function hexAlpha<T extends number>(
  color: string,
  alpha: AlphaRange<T>,
) {
  const parsed = parse(color);

  return formatHex8({
    ...parsed,
    alpha,
  });
}

export function hexToLightness<T extends number>(
  color: string,
  lightness?: LightnessRange<T>,
) {
  const lcha = oklch(color);

  if (lightness) {
    lcha.l += lightness;
  }

  lcha.l = lcha.l < 0 ? 0 : lcha.l > 1 ? 1 : lcha.l;

  return lcha.alpha ? formatHex8(lcha) : formatHex(lcha);
}

export function hexToChroma<T extends number>(
  color: string,
  chroma?: ChromaRange<T>,
) {
  const lcha = oklch(color);

  if (chroma) {
    lcha.c += chroma;
  }

  lcha.c = lcha.c < 0 ? 0 : lcha.c > 0.4 ? 0.4 : lcha.c;

  return lcha.alpha ? formatHex8(lcha) : formatHex(lcha);
}

export function hexToHue(color: string, hue?: HueRange) {
  const lcha = oklch(color);

  if (hue) {
    lcha.h += hue;
  }

  lcha.h = lcha.h < 0 ? 0 : lcha.h > 360 ? 360 : lcha.h;

  return lcha.alpha ? formatHex8(lcha) : formatHex(lcha);
}
