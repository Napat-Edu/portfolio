/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff923e",
        "light-orange": "#ffd580",
        "dark-blue": "#343352",
      },
    },
  },
  plugins: [],
};
