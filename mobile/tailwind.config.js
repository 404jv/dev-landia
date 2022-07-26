/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      regular: ["Roboto_400Regular"],
      medium: ["Roboto_500Medium"],
      bold: ["Roboto_700Bold"],
    },
    extend: {
      colors: {
        background: "#0C0D0D",
        primary: "#111212",
        secondary: "#181B1D",
        stroke: "#2F3437",
        black: "#000000",

        white: "#FFFFFF",
        title: "#EDEDED",
        subTitle: "#9FA2A5",
        description: "#C9C9C9",

        black_title: "#47474D",
        black_subTitle: "#6E6E70",

        text_detail: "#AEAEB3",

        blue: "#1F6FEB",
        lightBlue: "#425675",

        progressBar: "#AF9156",

        practiceActivity: "#3CC959",
        theoreticalActivity: "#F2E85A",
      }
    },
  },
  plugins: [],
}
