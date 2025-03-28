import { color } from "../../../color.ts";

export const html : Semantic[] = [
	{
		scope: [
			'entity.name.tag',
		],
		settings: {
			'foreground': '#d97189'
		}
	},
	{
		scope: [
			'entity.other.attribute-name'
		],
		settings: {
			'foreground': color.color8
		}
	},
	{
		scope: [
			'text.html.derivative'
		],
		settings: {
			'foreground': color.color9
		}
	},
	{
		scope: [
			'punctuation.definition.entity',
			'constant.character.entity.named',
		],
		settings: {
			'foreground': '#6fa125'
		}
	},
]