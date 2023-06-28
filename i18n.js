module.exports = {
	locales: ['es-es', 'en-gb'],
	defaultLocale: 'es-es',
	localeDetection: false,
	"pages": {
		"*": ["common"],
		"/": ["home", "example"],
		"/about": ["about"]
	},
}
