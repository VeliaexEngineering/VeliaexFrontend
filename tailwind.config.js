/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
		colors: {
			white: '#fff',
			transparentWhite: 'rgba(255, 255, 255, 0.85)',
			cardWhite: '#FAFAFA',
			cardBlack: '#212121',
			black: '#111',
			transparent: 'transparent',
			blue: '#003780',
			sharpBlue: '#024399',
			gray: '#222',
			// darkGray: 'rgba(0, 0, 0, 0.8)',
			lightGray: '#EEE',
			inputLight: '#EFF1F7',
			muted: '#999999',
			placeholderGray: '#666'
			// lighterGray: 'rgba(103, 105, 115, 0.05)',
			// lightestGray: 'rgba(217, 217, 217, 0.1)',
		},
	},
	plugins: [],
	darkMode: 'class'
}

