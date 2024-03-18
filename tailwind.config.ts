import type { Config } from "tailwindcss";

const heightMap = new Array(300).fill(1).reduce((prev, current, index) => {
  prev[index] = `${index}px`
  return prev
}, {})

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        ...heightMap
      }
    },
  },
  plugins: [],
};
export default config;
