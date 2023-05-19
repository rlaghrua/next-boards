/** @type {import('tailwindcss').Config} */
// const px0_10 = { ...Array.from(Array(11)).map((_, i) => `${i}px`) };
// const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) };
// const px0_200 = { ...Array.from(Array(201)).map((_, i) => `${i}px`) };
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      // borderWidth: px0_10,
      // fontSize: px0_100,
      // lineHeight: px0_100,
      // minWidth: px0_200,
      // minHeight: px0_200,
      // spacing: px0_200,
    },
  },
  plugins: [],
};
