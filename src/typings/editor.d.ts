type FontStyle = 'italic' | 'bold' | 'underline' | 'strikethrough';

type BaseSemanticModifier =
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

type BaseSemanticType =
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

type BaseScopeType =
  | 'comments'
  | 'strings'
  | 'keywords'
  | 'numbers'
  | 'types'
  | 'functions'
  | 'variables';

type SemanticTypeGroup =
  | `${BaseSemanticType}`
  | `${BaseSemanticType}.${string}`
  | `${BaseSemanticType}:${string}`
  | `${BaseSemanticType}.${string}:${string}`;

declare namespace Editor {
  export type BaseSemanticKey = SemanticTypeGroup;

  export type BaseScopeKey = BaseScopeType;

  export type BaseSemantic = Record<
    string,
    {
      foreground: string;
      fontStyle?: FontStyle;
    }
  > &
    Partial<
      Record<
        BaseSemanticKey,
        {
          foreground: string;
          fontStyle?: FontStyle;
        }
      >
    >;

  export type BaseScope = Record<
    BaseScopeKey,
    {
      scope: string | Array<string>;
      foreground: string;
      fontStyle?: FontStyle;
    }
  >;

  export type Semantic = Record<
    string,
    {
      foreground: string;
      fontStyle?: FontStyle;
    }
  >;

  export type Scope = {
    name?: string;
    scope: string | Array<string>;
    settings: {
      foreground?: string;
      fontStyle?: FontStyle;
    };
  };
}
