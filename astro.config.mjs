import node from "@astrojs/node"
import tailwind from "@astrojs/tailwind"
import { defineConfig } from "astro/config"
import makeLocals from "./config/locales"

import vue from "@astrojs/vue"

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), vue()],
	output: "server",
	adapter: node({
		mode: "standalone",
	}),
	i18n: {
		defaultLocale: "es",
		locales: makeLocals(),
		routing: {
			prefixDefaultLocale: true,
		},
	},
})
