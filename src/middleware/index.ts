import { defineMiddleware } from "astro:middleware"

const unprotectedRoutes = ["/", "/login"]

const middleware = defineMiddleware(({ url, redirect }, next) => {
	console.log(
		"Ejecutando middleware antes del renderizado",
		`Route: ${url.pathname}`
	)
	if (unprotectedRoutes.includes(url.pathname)) {
		return next()
	}
	console.log("Redirect -> login")
	return redirect("/login")
})

export const onRequest = middleware
