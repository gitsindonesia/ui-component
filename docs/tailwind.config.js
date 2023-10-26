/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    ".vitepress/**/*.{js,vue,ts,jsx,tsx,md}",
    "./components/**/*.{js,vue,ts,jsx,tsx,md}",
    "./experimental/**/*.{js,vue,ts,jsx,tsx,md}",
    "./forms/**/*.{js,vue,ts,jsx,tsx,md}",
    "./guide/**/*.{js,vue,ts,jsx,tsx,md}",
    "./primitives/**/*.{js,vue,ts,jsx,tsx,md}",
    "./public/**/*.{js,vue,ts,jsx,tsx,md}",
    "./templates/**/*.{js,vue,ts,jsx,tsx,md}",
    "./tools/**/*.{js,vue,ts,jsx,tsx,md}",
    "**/*.{js,vue,ts,jsx,tsx,md}",
    "./node_modules/@morpheme/**/src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [require("@morpheme/tailwind-config/preset")],
}

