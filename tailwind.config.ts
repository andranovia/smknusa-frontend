import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'gray-base': '#F2F2F2',
        'gray-medium': '#E2E8F0',
        'yellow-light': '#FFD980',
        'yellow' : '#F5C451',
        'primary' : '#081B34'
      },
      textColor: {
        'blue-base' : '#081B34',
        'gray': '#696969',
        'gray-light': '#9DA5B1'
      },
      borderColor: {
        'blue-base' : '#081B34',
        'yellow' : '#F5C451',
      },
      ringColor: {
        'yellow' : '#F5C451',
      },
      cursor: {
        next: 'url(/assets/icon/round-arrow-right.svg), next',
      },
    },
  },
  plugins: [],
};
export default config;
