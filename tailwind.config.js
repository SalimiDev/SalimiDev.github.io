/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#FFFFFF',
                    100: '#AFBBD4',
                    200: '#8DA9F2',
                    300: '#3C68D7',
                    400: '#283044',
                    500: '#12192B',
                    600: '#0D152B',
                    700: '#09122A',
                    800: '#05112E',
                    900: '#020E2C',
                },
            },
        },
        fontFamily: {
            Montserrat: ['Montserrat', 'sans-serif'],
            lato: ['Lato', 'sans-serif'],
            nunito: ['Nunito', 'sans-serif'],
        },
    },
    plugins: [],
};
