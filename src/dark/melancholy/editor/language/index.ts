import { html } from './html/scope.ts';
import { css } from './css/scope.ts';
import { js } from './js/scope.ts';
import { scss } from './scss/scope.ts';
import { less } from './less/scope.ts';
import { jsdoc } from './jsdoc/scope.ts';
import { ts } from './ts/scope.ts';
import { jsx } from './jsx/scope.ts';
import { tsx } from './tsx/scope.ts';
import { vue } from './vue/scope.ts';
import { json } from './json/scope.ts';
import { md } from './md/scope.ts';
import { go } from './go/scope.ts';

const languages = [
  ...html,
  ...css,
  ...scss,
  ...less,
  ...jsdoc,
  ...js,
  ...ts,
  ...jsx,
  ...tsx,
  ...vue,
  ...json,
  ...md,
  ...go,
];

export { languages };
