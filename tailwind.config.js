module.exports = {
    prefix: '',
    purge: {
        content: [
            './src/**/*.{html,ts}',
        ]
    },
    theme: {
        fontFamily: {
            Dosis: ['Dosis', 'sans-serif'],
        },
        extend: {

            colors: {
                'primary': '#06386D',
                'secondary': '',
                'bg_404': '#1a1a1a',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};