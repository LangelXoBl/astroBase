<template>
	<select
		@change="changeLanguage"
		name="lenguajes"
		value="en"
		id=""
		class="bg-transparent text-white hover:text-gray-300"
	>
		<option v-for="key in keys" :key="key" :value="key">
			{{ languages[key as keyof typeof languages].text }}
		</option>
	</select>
</template>

<script lang="ts">
import { languages } from "@/i18n"

export default {
	name: "Selector",
	data() {
		return {
			languages,
			keys: Object.keys(languages),
		}
	},
	methods: {
		changeLanguage(event) {
			console.log("changeLanguage", event.target.value)
			console.log("changeLanguage", event.target.value)
			const path = window.location.pathname
			window.location.href = `/${event.target.value}`
		},
	},
}
</script>
