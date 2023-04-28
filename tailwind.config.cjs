module.exports = {

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "sm": { "min": "370px", "max": "767px" },
      "md": { "min": "768px", "max": "1023px" },
      "lg": { "min": "1024px", "max": "1600px" }
    },
    plugins:
      [
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
        require("daisyui")
      ],
    daisyUi: {
      themes: [
        {
          light: {
            ...require("daisyui/src/colors/themes")["[data-theme=light]"],
            primary: "blue",
            "primary-focus": "mediumblue",
          },
        },
      ],
    },
  }

};
