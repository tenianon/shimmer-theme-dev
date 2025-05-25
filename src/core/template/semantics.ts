import { baseColor, baseSemanticColor, baseLanguageColor } from '../color.ts';

export const getSemanticsConfig = (
  semanticColor = baseSemanticColor(baseColor),
  languageColor = baseLanguageColor,
): Editor.Semantic => {
  const semantic = semanticColor;
  const language = languageColor;

  const defaultSemantic: Editor.BaseSemantic = {
    // class: {
    //   foreground: stc.class,
    // }
    // decorator: {
    //   foreground: stc.decorator,
    // },
    // event: {
    //   foreground: stc.event,
    // },
    // label: {
    //   foreground: stc.label,
    // },
    // macro: {
    //   foreground: stc.macro,
    // },
    // operator: {
    //   foreground: stc.operator,
    // },
    // regexp: {
    //   foreground: stc.regexp,
    // },
    // struct: {
    //   foreground: stc.struct,
    // },
    variable: {
      foreground: semantic.variable,
    },
    parameter: {
      foreground: semantic.parameter,
    },
    keyword: {
      foreground: semantic.keyword,
    },
    string: {
      foreground: semantic.string,
    },
    comment: {
      foreground: semantic.comment,
    },
    function: {
      foreground: semantic.function,
    },
    method: {
      foreground: semantic.method,
    },
    property: {
      foreground: semantic.property,
    },
    number: {
      foreground: semantic.number,
    },
    interface: {
      foreground: semantic.interface,
    },
    type: {
      foreground: semantic.type,
    },
    namespace: {
      foreground: semantic.namespace,
    },
    typeParameter: {
      foreground: semantic.typeParameter,
    },
    enum: {
      foreground: semantic.enum,
    },
    enumMember: {
      foreground: semantic.enumMember,
    },
  };

  const c: Editor.Semantic = {
    'macro:c': {
      foreground: semantic.class,
    },
    'enum:c': {
      foreground: semantic.typeParameter,
    },
    'enumMember:c': {
      foreground: semantic.typeParameter,
    },
  };

  const cpp: Editor.Semantic = {
    'templateType:cpp': {
      foreground: language.html.tag,
    },
    'enum:cpp': {
      foreground: semantic.typeParameter,
    },
    'enumMember:cpp': {
      foreground: semantic.typeParameter,
    },
  };

  const html: Editor.Semantic = {
    'class:html': {
      foreground: semantic.class,
    },
  };

  const js: Editor.Semantic = {
    'class:javascript': {
      foreground: semantic.class,
    },
  };

  const py: Editor.Semantic = {
    'class:python': {
      foreground: semantic.class,
    },
    'module:python': {
      foreground: semantic.namespace,
    },
    'class.builtin:python': {
      foreground: language.py.classBuiltin,
    },
    'class.typeHint.builtin:python': {
      foreground: semantic.type,
    },
    'magicFunction:python': {
      foreground: language.html.tag,
    },
    'selfParameter:python': {
      foreground: semantic.typeParameter,
    },
  };

  const ts: Editor.Semantic = {
    'class:typescript': {
      foreground: semantic.class,
    },
  };

  const tsx: Editor.Semantic = {
    'class:typescriptreact': {
      foreground: semantic.class,
    },
  };

  const vue: Editor.Semantic = {
    'class.declaration:vue': {
      foreground: semantic.class,
    },
  };

  return {
    ...defaultSemantic,
    ...c,
    ...cpp,
    ...html,
    ...js,
    ...py,
    ...ts,
    ...tsx,
    ...vue,
  };
};
