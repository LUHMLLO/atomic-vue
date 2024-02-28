/** @type {import('tailwindcss').Config} */
import { Scales } from "./src/commons/utils/scales"

export default {
  darkMode: ['class', '[data-mode="dark"]'],
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx,astro,vue}",
  ],
  theme: {
    borderRadius: Scales,
    fontSize: Scales,
    spacing: Scales,

    fontFamily: {
      'sans': "Montserrant, sans-serif",
      'display': "Montserrant, sans-serif",
      'body': "Montserrant, sans-serif",
    },

    extend: {
      colors: {
        'accent': {
          50: '#f2fbf8',
          100: '#d2f5ea',
          200: '#a4ebd4',
          300: '#6fd9bb',
          400: '#41c0a1',
          500: '#2aac8e',
          600: '#1d846e',
          700: '#1c695a',
          800: '#1a554a',
          900: '#1a473f',
          950: '#092a25',
        },
      },
    }

  },
  plugins: [],
}