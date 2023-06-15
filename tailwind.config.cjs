const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				black: '#000',
				white: '#f5f5f7',
				orange: '#E06330',
				tan: '#b7ab98',
				dblue: '#1b1f24',
				dkblue: '#24292f',
			},
		},
		boxShadow: {
			'3xl': '0 0 10px rgba(0,0,0,.2)',
			bshadow:
				'0 0 0 1px #000, 0 30px 30px rgba(0, 0, 0, 0.07), 0 15px 15px rgba(0, 0, 0, 0.06),0 10px 8px rgba(0, 0, 0, 0.05),0 4px 4px rgba(0, 0, 0, 0.04), 0 2px 2px rgba(0, 0, 0, 0.03),inset 0 1px 1px rgba(255, 255, 255, 0.1)',
		},
		screens: {
			xs: '480px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
		},

		fontFamily: {
			// Headings
			sans: ['Avant Garde', 'Inter', 'sans-serif'],
			// Base text
			monospace: ['Avant Garde', 'Inter', 'sans-serif'],
		},
		fontSize: {
			xs: '.75rem',
			sm: '.875rem',
			tiny: '.875rem',
			base: '1rem',
			lg: '1.125rem',
			xl: '1.25rem',
			'2xl': '1.5rem',
			'3xl': '1.875rem',
			'4xl': '2.25rem',
			'5xl': '3rem',
			'6xl': '4rem',
		},
		letterSpacing: {
			wide: '.025em',
		},
	},
	plugins: [
		plugin(function ({ addBase, theme }) {
			addBase({
				h2: {
					letterSpacing: theme('letterSpacing.wide'),
					fontWeight: 'bold',
				},
				li: {
					letterSpacing: theme('letterSpacing.wide'),
				},
			});
		}),
	],
};
