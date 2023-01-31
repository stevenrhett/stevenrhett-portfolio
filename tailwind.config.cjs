module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",], theme: {
        screens: {
            'sm': {'min': '370px', 'max': '767px'},
            'md': {'min': '768px', 'max': '1023px'},
            'lg': {'min': '1024px', 'max': '1280px'},
            'xl': {'min': '1281px', 'max': '1600px'},
        },
    }, plugins: [require("daisyui"), require('@tailwindcss/forms')],

}
