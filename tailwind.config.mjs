/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"wiki-link": "#0645ad",
				"wiki-border": "#a2a9b1",
			},
		},
	},
	plugins: [],
}
