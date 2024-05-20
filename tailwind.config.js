/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      backgroundSize: {
        "size-200": "200% 200%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
      },
      backgroundImage: {
        "gradient-primary": `linear-gradient(to right, #8C3FD9, #4E2DD1)`,
        "gradient-secondary": `linear-gradient(to right, #8A00D4, #8F19BD)`,
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss", require("@tailwindcss/forms")],
};
