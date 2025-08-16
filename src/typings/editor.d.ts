type FontStyle = 'bold' | 'italic' | 'strikethrough' | 'underline';

type BaseSemanticModifier =
  | 'abstract'
  | 'async'
  | 'declaration'
  | 'defaultLibrary'
  | 'definition'
  | 'deprecated'
  | 'documentation'
  | 'modification'
  | 'readonly'
  | 'static';

type BaseSemanticType =
  | 'class'
  | 'comment'
  | 'decorator'
  | 'enum'
  | 'enumMember'
  | 'event'
  | 'function'
  | 'interface'
  | 'keyword'
  | 'label'
  | 'macro'
  | 'method'
  | 'namespace'
  | 'number'
  | 'operator'
  | 'parameter'
  | 'property'
  | 'regexp'
  | 'string'
  | 'struct'
  | 'type'
  | 'typeParameter'
  | 'variable';

type BaseSyntaxType =
  | 'comments'
  | 'functions'
  | 'keywords'
  | 'numbers'
  | 'strings'
  | 'types'
  | 'variables';

type SemanticTypeGroup =
  | `${BaseSemanticType}:${string}`
  | `${BaseSemanticType}.${string}:${string}`
  | `${BaseSemanticType}.${string}`
  | `${BaseSemanticType}`;

declare namespace Editor {
  export type BaseSemanticKey = SemanticTypeGroup;

  export type BaseSyntaxKey = BaseSyntaxType;

  export type BaseSemantic = Partial<
    Record<
      BaseSemanticKey,
      {
        fontStyle?: FontStyle;
        foreground: string;
      }
    >
  > &
    Record<
      string,
      {
        fontStyle?: FontStyle;
        foreground: string;
      }
    >;

  export type BaseSyntax = Record<
    BaseSyntaxKey,
    {
      fontStyle?: FontStyle;
      foreground: string;
      scope: string | Array<string>;
    }
  >;

  export type Semantic = Record<
    string,
    {
      fontStyle?: FontStyle;
      foreground?: string;
    }
  >;

  export type Syntax = {
    name?: string;
    scope: string | Array<string>;
    settings: {
      fontStyle?: FontStyle;
      foreground?: string;
    };
  };
}
