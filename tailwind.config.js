const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			tablet: '640px',
			laptop: '1024px',
			desktop: '1280px',
		},
		container: {
			center: true,
			padding: '2rem',
		},
		extend: {
			boxShadow: {
				neon: "0 0 5px theme('colors.purple.200'), 0 0 20px theme('colors.purple.700')",
			},
		},
	},
	plugins: [
		plugin(({ theme, addUtilities }) => {
			const neonUtilities = {};
			const colors = theme('colors');
			for (const color in colors) {
				if (typeof colors[color] === 'object') {
					const color1 = colors[color]['500'];
					const color2 = colors[color]['700'];

					neonUtilities[`.neon-${color}`] = {
						boxShadow: `0 0 5px ${color1}, 0 0 20px ${color2}`,
					};
				}
			}
			addUtilities(neonUtilities);
		}),
	],
};
