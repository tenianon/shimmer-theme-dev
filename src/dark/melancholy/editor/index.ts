import { semanticToken } from './semantic-token.ts';
import { languages } from './language/index.ts';
import { symbolScope, tokenScopes } from './textmate-scope.ts';

const semanticTokenColor: Editor.Semantic = semanticToken;

const tokenColor: Editor.Scopes[] = [symbolScope, ...tokenScopes, ...languages];

for (let i = 0; i < tokenColor.length; i++) {
  tokenColor[i].settings.foreground =
    tokenColor[i].settings.foreground?.toLowerCase();
}

for (const token in semanticTokenColor) {
  const key = token as keyof typeof semanticTokenColor;
  semanticTokenColor[key].foreground =
    semanticTokenColor[key].foreground?.toLowerCase();
}

export const editorTokenColorCustomizations = tokenColor;

export const editorSemanticTokenColorCustomizations = semanticTokenColor;
