/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    plugins: [
        require('tailwind-scrollbar-hide')
      ],
    theme: {
        extend: {
            colors: {
                'primary-white': '#FFFFFF',
                'primary-black': '#000000',
                primary: {
                    50: '#FFFFFF',
                    100: '#AFBBD4',
                    200: '#8DA9F2',
                    300: '#037FFF',
                    400: '#1F2A40',
                    500: '#141b2d',
                    600: '#0D152B',
                    700: '#09122A',
                    800: '#05112E',
                    900: '#020E2C',
                },
                grayAccent: {
                    100: '#e0e0e0',
                    200: '#c2c2c2',
                    300: '#a3a3a3',
                    400: '#858585',
                    500: '#666666',
                    600: '#525252',
                    700: '#3d3d3d',
                    800: '#292929',
                    900: '#141414',
                },
            },
            borderWidth: {
                DEFAULT: '1px',
                0: '0',
                '1/2': '0.5px',
                2: '2px',
                3: '3px',
                4: '4px',
                6: '6px',
                8: '8px',
            },
            screens: {
                '-sm': {'max': '350px'},
                // => @media (max-width: 639px) { ... }
                '-lg': {'max': '1024px'},
                // => @media (max-width: 1024px) { ... }
              }
        },
        fontFamily: {
            Montserrat: ['Montserrat', 'sans-serif'],
            lato: ['Lato', 'sans-serif'],
            nunito: ['Nunito', 'sans-serif'],
            poppins: ['Poppins', 'sans-serif'],
            openSans: ['Open Sans', 'sans-serif'],
        },
    },
    plugins: [],
};
