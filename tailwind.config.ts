import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			background: {
				DEFAULT: '#F2F2F2',
				gray: '#595959',
				dark: '#262626',
			},

			light: '#F2F2F2',
			dark: '#262626',

			primary: {
				DEFAULT: '#593723',
				light: '#8C5E35',
			},

			highlight: {
				DEFAULT: '#8C1E14',
			},
		},
	},
	plugins: [],
};
export default config;
