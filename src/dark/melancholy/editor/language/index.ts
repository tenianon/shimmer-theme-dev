import { semanticHTML, scopeHTML } from './html/index.ts';
import { scopeCSS } from './css/index.ts';
import { semanticJS, scopeJS } from './js/index.ts';
import { scopeScss } from './scss/index.ts';
import { scopeLess } from './less/index.ts';
import { scopeJSDoc } from './jsdoc/index.ts';
import { semanticTS, scopeTS } from './ts/index.ts';
import { scopeJSX } from './jsx/index.ts';
import { semanticTSX, scopeTSX } from './tsx/index.ts';
import { semanticVue, scopeVue } from './vue/index.ts';
import { scopeJSON } from './json/index.ts';
import { scopeMD } from './md/index.ts';
import { scopeGo } from './go/index.ts';
import { semanticPy, scopePy } from './py/index.ts';

const semantics = {
  ...semanticHTML,
  ...semanticJS,
  ...semanticTS,
  ...semanticTSX,
  ...semanticVue,
  ...semanticPy,
};

const scopes = [
  ...scopeHTML,
  ...scopeCSS,
  ...scopeScss,
  ...scopeLess,
  ...scopeJSDoc,
  ...scopeJS,
  ...scopeTS,
  ...scopeJSX,
  ...scopeTSX,
  ...scopeVue,
  ...scopeJSON,
  ...scopeMD,
  ...scopeGo,
  ...scopePy,
];

export { semantics, scopes };
