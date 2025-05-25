type ColorKey =
  | 'primary'
  | `${'color'}${number}`
  | `${'color'}${number}.${number}`;

declare type Color = Record<ColorKey, string>;
