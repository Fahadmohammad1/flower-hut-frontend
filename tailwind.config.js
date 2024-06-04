/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  // eslint-disable-next-line no-undef
  plugins: [daisyui],

  daisyui: {
    theme: [
      {
        mytheme: {
          "primary": "#ff00ff",
          'fh-primary': "#FF00B8"
        }
      }
    ],
  },
}

