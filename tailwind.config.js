/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				unbounded: ['Unbounded', 'cursive']
			},
			boxShadow: {
				'neubrut-2': '2px 2px 0px #000000;',
				'neubrut-4': '4px 4px 0px #000000;',
				'neubrut-6': '6px 6px 0px #000000;',
				'neubrut-b-2': '0px 2px 0px #000000;',
				'neubrut-b-4': '0px 4px 0px #000000;',
				'neubrut-b-6': '0px 6px 0px #000000;'
			},
			animation: {
				'spin-slow': 'spin 8s linear infinite'
			}
		}
	},
	plugins: []
};
