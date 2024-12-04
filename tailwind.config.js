/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		screens: {
			md: '896px',
			lg: '1024px',
			xl: '1280px',
		},
		colors: {
			black: '#191A15',
			white: '#F2F2F2',
			primary: '#CF82B7',
			darker: '#CF94C6',
			light: '#DB9BC7',
			reallyLight: '#FFAFCC',
			pastel: '#CD8EC0',
			lightPastel: '#FF9FC2',
			ultraLightPastel: '#e8cce2',
			transparent: 'transparent',
			error: '#eb4034',
		},
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [],
}
