const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: { backgroundImage: { "slider-1": "url('./src/img/slider1.jpg')" } },
  },
  darkMode: "class",
  plugins: [flowbite.plugin()],
};
