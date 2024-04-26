/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-desktop": "url('/src/assets/bg/bg-desktop.jpg')",
        "bg-mobile": "url('/src/assets/bg/bg-mobile.jpg')",

        "bg-desktop-light": "url('/src/assets/bg/bg-desktop-light.jpg')",
        "bg-mobile-light": "url('/src/assets/bg/bg-mobile-light.jpg')",

        "sunIcon": "url('/src/assets/svg/sunIcon.svg')",
        "moonIcon": "url('/src/assets/svg/moonIcon.svg')",
      },
      }
    },
  plugins: [],
};
