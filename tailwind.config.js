/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}", // Scan files in src/app
    "./src/components/**/*.{js,ts,jsx,tsx}", // Scan files in src/components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
