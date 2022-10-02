/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		screens: {
			xs: "360px",
			...defaultTheme.screens,
		},
		fontFamily: {
			sans: ["inter-var", ...defaultTheme.fontFamily.sans],
		},
		extend: {},
	},
	plugins: [require("@tailwindcss/forms")],
};
