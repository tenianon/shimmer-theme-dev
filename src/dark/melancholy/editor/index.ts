import { defaultSemanticTokens } from './semantic-token.ts';
import { scopes, semantics } from './language/index.ts';
import { symbolScope, defaultTokenScopes } from './textmate-scope.ts';

const semanticTokenColor: Editor.Semantic = {
  ...defaultSemanticTokens,
  ...semantics,
};

const tokenColor: Editor.Scopes[] = [
  ...defaultTokenScopes,
  symbolScope,
  ...scopes,
];

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
