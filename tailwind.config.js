/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: '#FFFFFF',
      'gray-1': '#121214',
      'gray-2': '#202024',
      'gray-3': '#29292E',
      'gray-4': '#323238',
      'gray-5': '#7C7C8A',
      'gray-6': '#C4C4CC',
      'gray-7': '#E1E1E6',
      'green-dark': '#015F43',
      green: '#00875F',
      'green-light': '#00B37E',
      'red-dark': '#AA2834',
      red: '#F75A68',
    },
  },
  plugins: [],
}
