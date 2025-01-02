/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        toastSucess: "rgba(46, 200, 98, .20)",
        toastError: "rgba(228, 0, 35, .20)",
        toastMessage: "",
      },
    },
  },
  plugins: [],
};
