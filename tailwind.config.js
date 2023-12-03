/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/component/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/main/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/assest/**/*.{js,ts,jsx,tsx,mdx}",

  ],
  theme: {
    extend: {
      boxShadow: {
        'shadow-color':'0px 0px 20px rgb(255, 167, 5);',
        'shadow':'0px 0px 20px rgb(0, 0, 0, 0.1);',
      },
    },
  },
  plugins: [],
}
