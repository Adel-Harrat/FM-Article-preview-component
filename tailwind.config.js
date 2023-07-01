/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          dark: "hsl(217, 19%, 35%)",
          desaturated: "hsl(214, 17%, 51%)",
          grayish: "hsl(212, 23%, 69%)",
        },
        grey: "hsl(210, 46%, 95%)",
      },
      fontFamily: {
        manrope: ["'Manrope'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
