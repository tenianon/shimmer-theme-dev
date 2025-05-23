import { semanticTokenMap } from './semantic-token.ts';
import { scopes, semantics } from './language/index.ts';
import { symbolScope, defaultTokenScopes } from './textmate-scope.ts';
import { mergedScope } from '../../utils/merged.ts';

export const semanticTokenColor: Editor.Semantic = {
  ...semanticTokenMap,
  ...semantics,
};

export const scopeTokenColor: Editor.Scope[] = mergedScope([
  ...defaultTokenScopes,
  symbolScope,
  ...scopes,
]);
