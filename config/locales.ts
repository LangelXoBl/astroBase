import type { Locales } from "astro"
import languages from "../src/i18n/languages"

function makeLocals(): Locales {
	return Object.keys(languages)
}

export default makeLocals
