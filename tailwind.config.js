module.exports = {
    purge: ['./src/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                green: '#34846F',
                dark: '#364B44',
                dustWhite: '#F3F0FF',
                shades: {
                    1: '#509E88',
                    2: '#6BBAA3',
                    3: '#86D6BE',
                    4: '#A2F2DA',
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
