import { baseColor, baseSemanticColor, baseLanguageColor } from '../color.ts';

export const getSemanticsConfig = (
  color = baseColor,
  semanticColor = baseSemanticColor(baseColor),
  languageColor = baseLanguageColor,
): Editor.Semantic => {
  const semantic = semanticColor;
  const language = languageColor;

  const defaultSemantic: Editor.BaseSemantic = {
    class: {
      foreground: semantic.class,
    },
    comment: {
      foreground: semantic.comment,
    },
    enum: {
      foreground: semantic.enum,
    },
    enumMember: {
      foreground: semantic.enumMember,
    },
    function: {
      foreground: semantic.function,
    },
    interface: {
      foreground: semantic.interface,
    },
    keyword: {
      foreground: semantic.keyword,
    },
    method: {
      foreground: semantic.method,
    },
    namespace: {
      foreground: semantic.namespace,
    },
    number: {
      foreground: semantic.number,
    },
    parameter: {
      foreground: semantic.parameter,
    },
    property: {
      foreground: semantic.property,
    },
    string: {
      foreground: semantic.string,
    },
    type: {
      foreground: semantic.type,
    },
    typeParameter: {
      foreground: semantic.typeParameter,
    },
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
  };

  const c: Editor.Semantic = {
    'enum:c': {
      foreground: semantic.typeParameter,
    },
    'enumMember:c': {
      foreground: semantic.typeParameter,
    },
    'macro:c': {
      foreground: semantic.class,
    },
    'variable.global:c': {
      fontStyle: 'bold',
    },
  };

  const cpp: Editor.Semantic = {
    'enum:cpp': {
      foreground: semantic.typeParameter,
    },
    'enumMember:cpp': {
      foreground: semantic.typeParameter,
    },
    'templateType:cpp': {
      foreground: language.html.tag,
    },
    'variable.global:cpp': {
      fontStyle: 'bold',
    },
  };

  const py: Editor.Semantic = {
    'class.builtin:python': {
      foreground: language.py.classBuiltin,
    },
    'class.typeHint.builtin:python': {
      foreground: semantic.type,
    },
    'class:python': {
      foreground: semantic.class,
    },
    'magicFunction:python': {
      foreground: language.html.tag,
    },
    'module:python': {
      foreground: semantic.namespace,
    },
    'selfParameter:python': {
      foreground: semantic.typeParameter,
    },
  };

  const rs: Editor.Semantic = {
    'attributeBracket.attribute:rust': {
      foreground: baseColor.color8,
    },
    'generic.attribute:rust': {
      foreground: semantic.parameter,
    },
    'lifetime:rust': {
      foreground: language.html.tag,
    },
    'struct:rust': {
      foreground: semantic.class,
    },
  };

  return {
    ...defaultSemantic,
    ...c,
    ...cpp,
    ...py,
    ...rs,
  };
};
