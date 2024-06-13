/** @type {import('tailwindcss').Config} */

import forms from "@tailwindcss/forms";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  prefix: "",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [forms],
};
