import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'sandy_brown': { 
          DEFAULT: '#fe9f42', 100: '#402000', 200: '#804001', 300: '#c06001', 400: '#fe8103', 500: '#fe9f42', 600: '#feb469', 700: '#fec68e', 800: '#ffd9b4', 900: '#ffecd9' 
        }, 
        'coyote': { 
          DEFAULT: '#7d5b3e', 100: '#19120c', 200: '#332519', 300: '#4c3725', 400: '#654a32', 500: '#7d5b3e', 600: '#a97c53', 700: '#bf9c7e', 800: '#d5bda9', 900: '#eaded4' 
        }, 
        'old_lace': { 
          DEFAULT: '#f6f2e5', 100: '#473c18', 200: '#8d7830', 300: '#c6ac57', 400: '#decf9e', 500: '#f6f2e5', 600: '#f8f4ea', 700: '#faf7ef', 800: '#fbfaf4', 900: '#fdfcfa' 
        }, 
        'raisin_black': { 
          DEFAULT: '#211f2f', 100: '#060609', 200: '#0d0c13', 300: '#13121c', 400: '#1a1825', 500: '#211f2f', 600: '#454063', 700: '#6a6397', 800: '#9b96bb', 900: '#cdcbdd' 
        }, 
        'atomic_tangerine': { 
          DEFAULT: '#ed9776', 100: '#3f1808', 200: '#7e3010', 300: '#be4719', 400: '#e56938', 500: '#ed9776', 600: '#f1ad93', 700: '#f4c2ae', 800: '#f8d6c9', 900: '#fbebe4' 
        }, 
        'rusty_red': { 
          DEFAULT: '#df3547', 100: '#30070b', 200: '#5f0f17', 300: '#8f1622', 400: '#bf1e2e', 500: '#df3547', 600: '#e65d6a', 700: '#ec8590', 800: '#f2aeb5', 900: '#f9d6da' 
        }, 
        'desert_sand': { 
          DEFAULT: '#e9ceba', 100: '#402714', 200: '#7f4e28', 300: '#bf753c', 400: '#d5a17a', 500: '#e9ceba', 600: '#edd8c7', 700: '#f2e2d5', 800: '#f6ebe3', 900: '#fbf5f1' 
        }, 
        'licorice': { 
          DEFAULT: '#261b1c', 100: '#080606', 200: '#100b0b', 300: '#171111', 400: '#1f1617', 500: '#261b1c', 600: '#5b4043', 700: '#8f6569', 800: '#b5979a', 900: '#dacbcc' 
        }, 
        'white': { 
          DEFAULT: '#ffffff', 100: '#333333', 200: '#666666', 300: '#999999', 400: '#cccccc', 500: '#ffffff', 600: '#ffffff', 700: '#ffffff', 800: '#ffffff', 900: '#ffffff' 
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
