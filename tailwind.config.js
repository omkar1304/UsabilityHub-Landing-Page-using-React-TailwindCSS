/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "heading-img": "url('/src/assets/asset 32.png')",
        "nav-img": "url('/src/assets/asset 1.png')",
        "nav-img2": "url('/src/assets/asset 33.svg')",
        "service-img": "url('/src/assets/asset 34.svg')",
        "para-img": "url('/src/assets/asset 35.svg')",
      },

      colors: {
        primary: "#183b56",
        "btn-bg-primary": "#2294ed",
        "btn-text-primary": "#ffffff",
        "btn-bg-secondary": "#ffffff",
        "btn-text-secondary": "#183b56",
        primary: "#183b56",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      ssm: "704px",
      sm: "768px",
      md: "1102px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
