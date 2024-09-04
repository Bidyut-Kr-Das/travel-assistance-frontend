/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        "space-mono": ['"Space Mono"', "monospace"],
      },
      colors: {
        "space-blue": "#0B3D91",
        "neon-blue": "#08F7FE",
        "neon-purple": "#B026FF",
        "neon-pink": "#FE53BB",
      },
      boxShadow: {
        neon: '0 0 5px theme("colors.neon-blue"), 0 0 20px theme("colors.neon-blue")',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
