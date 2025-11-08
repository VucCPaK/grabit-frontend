/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'orbitron': ['Orbitron', 'sans-serif'],
                'montserrat': ['Montserrat', 'sans-serif'],
                'exo': ['Exo 2', 'sans-serif'],
            },
        },
    },
    plugins: [],
}