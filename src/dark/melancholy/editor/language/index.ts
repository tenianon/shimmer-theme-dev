import { html } from './html/semantic.ts'
import { css } from './css/semantic.ts'
import { js } from './js/semantic.ts'
import { ts } from './ts/semantic.ts'
import { json } from './json/semantic.ts'
import { jsx } from './jsx/semantic.ts'
import { tsx } from './tsx/semantic.ts'
import { python } from './python/semantic.ts'

const languages = [
	...js,
	...html,
	...css,
	...jsx,
	...ts,
	...tsx,
	...json,
  ...python
]

export {
	languages
}
