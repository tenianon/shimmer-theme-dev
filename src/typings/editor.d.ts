type TokenGroupKey =
  | "comments"
  | "strings"
  | "keywords"
  | "numbers"
  | "types"
  | "functions"
  | "variables";

type FontStyle = "italic" | "bold" | "underline" | "strikethrough";

type TokenGroupSemantic = {
  [key in TokenGroupKey]: {
    scope: string | Array<string>;
    foreground: string;
  };
};

type Semantic = {
  name?: string;
  scope: string | Array<string>;
  settings: {
    fontStyle?: FontStyle;
    foreground?: string;
  };
};
