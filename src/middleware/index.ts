import { defineMiddleware } from "astro:middleware"

const protectedRoutes = ["/about"]

const middleware = defineMiddleware(
	({ url, redirect, currentLocale, ...rest }, next) => {
		// console.log(url)
		// console.log(
		// 	"Ejecutando middleware antes del renderizado",
		// 	`Route: ${url.pathname}`
		// )
		// console.log(rest)
		// if (protectedRoutes.includes(url.pathname)) {
		// 	console.log("Redirect -> login")
		// 	return redirect("/login")
		// }
		return next()
	}
)

export const onRequest = middleware
