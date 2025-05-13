type FontStyle = 'italic' | 'bold' | 'underline' | 'strikethrough';

type SemanticTokenModifiersLegend =
  | 'declaration'
  | 'definition'
  | 'readonly'
  | 'static'
  | 'deprecated'
  | 'abstract'
  | 'async'
  | 'modification'
  | 'documentation'
  | 'defaultLibrary';

type SemanticTokenTypesLegend =
  | 'variable'
  | 'parameter'
  | 'keyword'
  | 'string'
  | 'number'
  | 'comment'
  | 'function'
  | 'method'
  | 'property'
  | 'class'
  | 'namespace'
  | 'interface'
  | 'type'
  | 'typeParameter'
  | 'enum'
  | 'enumMember'
  | 'decorator'
  | 'event'
  | 'label'
  | 'macro'
  | 'operator'
  | 'regexp'
  | 'struct';

type TokenGroupScopeTypesLegend =
  | 'comments'
  | 'strings'
  | 'keywords'
  | 'numbers'
  | 'types'
  | 'functions'
  | 'variables';

type Modifiers = `.${string}`;
type SemanticTokenType =
  | `${SemanticTokenTypesLegend}`
  | `${SemanticTokenTypesLegend}.${string}`
  | `${SemanticTokenTypesLegend}:${string}`
  | `${SemanticTokenTypesLegend}.${string}:${string}`;

declare namespace Editor {
  export type TokenGroupScopeKey = TokenGroupScopeTypesLegend;

  export type SemanticTokenKey = SemanticTokenType;

  export type SemanticTokenMap = {
    [key in SemanticTokenKey]?: {
      foreground: string;
      fontStyle?: FontStyle;
    };
  };

  export type TokenGroupScopesMap = {
    [key in TokenGroupScopeKey]?: {
      scope: string | Array<string>;
      foreground: string;
      fontStyle?: FontStyle;
    };
  };

  export type Semantic = {
    [key in SemanticTokenKey]?: {
      foreground: string;
      fontStyle?: FontStyle;
    };
  };

  export type Scopes = {
    name?: string;
    scope: string | Array<string>;
    settings: {
      foreground?: string;
      fontStyle?: FontStyle;
    };
    [key: string]: any;
  };
}
