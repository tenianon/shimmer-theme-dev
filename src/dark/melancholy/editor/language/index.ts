import { scopeHTML } from './html/scope.ts';
import { semanticHTML } from './html/semantic.ts';
import { scopeCSS } from './css/scope.ts';
import { scopeJS } from './js/scope.ts';
import { semanticJS } from './js/semantic.ts';
import { scopeScss } from './scss/scope.ts';
import { scopeLess } from './less/scope.ts';
import { scopeJSDoc } from './jsdoc/scope.ts';
import { scopeTS } from './ts/scope.ts';
import { semanticTS } from './ts/semantic.ts';
import { scopeJSX } from './jsx/scope.ts';
import { scopeTSX } from './tsx/scope.ts';
import { semanticTSX } from './tsx/semantic.ts';
import { scopeVue } from './vue/scope.ts';
import { semanticVue } from './vue/semantic.ts';
import { scopeJSON } from './json/scope.ts';
import { scopeMD } from './md/scope.ts';
import { scopeGo } from './go/scope.ts';
import { scopePy } from './py/scope.ts';
import { semanticPy } from './py/semantic.ts';

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

const semantics = {
  ...semanticHTML,
  ...semanticJS,
  ...semanticTS,
  ...semanticTSX,
  ...semanticVue,
  ...semanticPy,
};

export { scopes, semantics };
