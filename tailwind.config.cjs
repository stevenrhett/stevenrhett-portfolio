module.exports = {

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "sm": { "min": "370px", "max": "767px" },
      "md": { "min": "768px", "max": "1023px" },
      "lg": { "min": "1024px", "max": "1600px" }

    },
    daisyUi: {
      themes: [
        {
          myTheme: {

            "primary": "#eaf77b",

            "secondary": "#beffaf",

            "accent": "#199e33",

            "neutral": "#3A233E",

            "base-100": "#FAF9FA",

            "info": "#90B3F4",

            "success": "#1B8D7E",

            "warning": "#995205",

            "error": "#FB1313",
          },
        },
      ],
    },
    plugins:
      [
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
        require("daisyui")
      ],
  },

};
