import en from "./en.json"
import es from "./es.json"

export const languages = {
	es: { text: "Español", translate: es },
	en: { text: "English", translate: en },
	fr: { text: "Français", translate: null },
}

export const getI18N = ({
	currentLocale = "es",
}: {
	currentLocale: string | undefined
}) => {
	if (!(currentLocale in languages)) {
		console.log("language not defined")
		return languages.es.translate
	}
	console.log("returning language", currentLocale)
	return {
		...languages.es.translate,
		...languages[currentLocale as keyof typeof languages].translate,
	}
}
