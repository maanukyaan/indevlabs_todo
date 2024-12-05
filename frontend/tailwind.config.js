/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: '"Unbounded", serif',
        main: '"Nunito Sans", serif',
      },
    },
  },
  plugins: [],
};
