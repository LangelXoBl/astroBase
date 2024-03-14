import type { Locales } from "astro"
import { languages } from "../src/i18n/index"

function makeLocals(): Locales {
	return Object.keys(languages)
}

export default makeLocals
