import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
	  animation: {
	    "swag": "10s linear 1s infinite running slidein",
	  },
	  keyframes: {
	    slidein: {
		'0%': {transform: 'translateX(-10vw)'},
		'100%': {transform: 'translateX(110vw)'},
		},
	  },
	},
  },
  plugins: [],
};
export default config;
