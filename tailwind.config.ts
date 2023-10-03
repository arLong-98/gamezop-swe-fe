import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens:{
      mobile: '480px',
      tablet: '768px',
      laptop:'1024px',
      largeLaptop: '1440px'
    },
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      "tinted-black": "#14151D",
      purple: "#7940FF",
      gray: "#C4C4C4",
      "pill-gray": "#8A898D",
      "pill-bg-gray": "#F4F4F8",
      "light-gray": "#51525C",
      "dark-gray": "#212229",
      "footer-gray": "#929292",
      blue: "#4075FF",
      pink: "#FF4085",
      "break-grey": "#FAFAFC",
      offWhite: "#F5F5F5",
      transparent: "transparent",
      errorRed: "#E97061",
      veryLightGrey: "#eeeeee",
    },
    fontSize:{
      xl:['18px','1.5'],
      '2xl':['20px','1.5'],
      '3xl':['25px','1.5'],
      '4xl':['35px','1.5'],
      '5xl':['50px','1.5'],

    },
    extend: {
      backgroundImage: {
        blurGradient:
          "linear-gradient(270deg, rgba(22,23,25,0.7497592787114846) 100%, rgba(255,255,255,0) 100%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    plugin(function({addUtilities}){
      addUtilities({
        '.no-scrollbar::-webkit-scrollbar':{
          display: 'none'
        },

        '.no-scrollbar':{
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none'
        }
      })
    })
  ],
}

export default config;
