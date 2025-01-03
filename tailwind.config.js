/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "m-poppins": ['Poppins', 'sans-serif'],
      },

      colors: {
        "m-cyan": "hsl(180, 66%, 49%)",
        "m-violet": "hsl(257, 27%, 26%)",
        "m-red": "hsl(0, 87%, 67%)",
        "m-gray": "hsl(0, 0%, 75%)",
        "m-grash-violet": "hsl(257, 7%, 63%)",
        "m-dark-blue": "hsl(255, 11%, 22%)",
        "m-very-dark-violet": "hsl(260, 8%, 14%)",
      },
    },
  },
  plugins: [],
}