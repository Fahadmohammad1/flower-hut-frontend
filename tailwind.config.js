/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fh-primary': "#FF00B8"
      }
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [daisyui],
}

