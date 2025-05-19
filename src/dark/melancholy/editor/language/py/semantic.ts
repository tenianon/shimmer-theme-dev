import { semanticTokenColor as stc } from '../../../color.ts';
import { colorHTML } from '../html/color.ts';
import { colorPy } from './color.ts';

export const semanticPy: Editor.SemanticTokenMap = {
  'class:python': {
    foreground: stc.class,
  },
  'module:python': {
    foreground: stc.namespace,
  },
  'class.builtin:python': {
    foreground: colorPy.classBuiltin,
  },
  'class.typeHint.builtin:python': {
    foreground: stc.type,
  },
  'magicFunction:python': {
    foreground: colorHTML.tag,
  },
  'selfParameter:python': {
    foreground: stc.typeParameter,
  },
};
//support.type.metaclass.python
//meta.indexed-name.python
//meta.item-access.python
