/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./packages/**/index.html",
    "./packages/**/src/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./packages/**/src/**/*.stories.{html,js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
