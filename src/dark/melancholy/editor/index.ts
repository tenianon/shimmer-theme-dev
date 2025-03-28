import { languages } from './language/index.ts'
import { symbolSemantic, tokenSemantic } from './public-semantic.ts'

const customizations: Semantic[] = [
	symbolSemantic,
	...tokenSemantic,
	...languages
]

for (let i = 0; i < customizations.length; i++) {
	customizations[i].settings.foreground = customizations[i].settings.foreground?.toLowerCase()
}


export const editorTokenColorCustomizations = customizations