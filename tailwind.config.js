const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        } ,colors: {
            background: '#eaf0ff',
            content: '#faf4fd',
            white: '#FFFFFF',
            x: 'rgba(75, 0, 130, 0.3)',
            gray:'#bfbac4'
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
