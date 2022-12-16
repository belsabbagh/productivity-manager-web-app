const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
        // './resources/css/app.css',
    ],

    theme: {
        colors: {
            background: '#eaf0ff',
            content: '#faf4fd',
            white: '#FFFFFF',
            gray: '#aaaaaa',
            red: '#FF0000',
            textbox: '#4b00820d',
        },
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            borderRadius: {
                'tiny': '0.5rem',
            },
            widths: {
                '75': '18.75rem'
            },
            margin: {
                '750px': '750px'
            }
        },
        colors: {
            background: '#eaf0ff',
            content: '#faf4fd',
            white: '#FFFFFF',
            x: 'rgba(75, 0, 130, 0.3)',
            gray:'#bfbac4'
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
