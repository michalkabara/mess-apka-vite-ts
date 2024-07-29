/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: { backgroundImage: { "slider-1": "url('./src/img/slider1.jpg')" } },
  },
  darkMode: "class",
};
