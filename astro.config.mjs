import tailwind from "@astrojs/tailwind"
import { defineConfig } from "astro/config"
import makeLocals from "./config/locales"

import node from "@astrojs/node"

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind()],
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
