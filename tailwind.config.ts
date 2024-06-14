import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'1024px'
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        primaryColor:"#010a5e",
        primaryColorLight:"#010d78",
        secondaryColor:"#FFCC00",
        paragraphColor:"#c0c0c0",
        whiteColor:"#fff",
        blackColor:"#000",
        greenColor:"#007936",
        redColor:"#cc3433",
        darkColor:"#000",
        darkColorLight:"#171717"
      },
    },
  },
  plugins: [],
};
export default config;
