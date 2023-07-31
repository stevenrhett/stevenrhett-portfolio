/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",

    ],
    theme: {
        screens: {
            'sm': '576px',
            // => @media (min-width: 767px) { ... }
            'md': '768px',
            // => @media (min-width: 768px) { ... }
            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }
            'xl': '1600px',
            // => @media (min-width: 1600px) { ... }
        },
    },

    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
        require('@tailwindcss/aspect-ratio'),
        require("@headlessui/tailwindcss"),
        require("daisyui"),
    ],

};
