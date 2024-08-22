/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home": "url('/src/assets/restaurant.jpg')"
      }
    },
  },
  plugins: [],
}

