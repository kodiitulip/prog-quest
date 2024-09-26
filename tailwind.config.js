/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			boxShadow: {
				'button-default': '0px 10px 0px',
				'button-active': '0px 6px 0px',
			},
			colors: {
				text: {
					900: 'var(--text-900)',
				},
				background: {
					100: 'var(--background-100)',
					200: 'var(--background-200)',
				},
				primary: {
					100: '#dbc9f3',
					200: '#ad9ad7',
					300: '#a47fff',
					400: '#8b52fe',
					500: '#452d66',
				},
				secondary: {
					100: '#81c784',
					200: '#4caf50',
				},
			},
			screens: {
				tn: '320px',
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1536px',
			},
			keyframes: {
				'fade-in-up': {
					'0%': {
						opacity: 0,
						transform: 'translateY(20px)',
					},
					'100%': {
						opacity: 1,
						transform: 'translateY(0px)',
					},
				},
			},
			animation: {
				'fade-in-up': 'fade-in-up 0.5s ease-out',
			},
		},
	},
	plugins: [],
};
