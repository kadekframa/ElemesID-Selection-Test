/** @type {import('tailwindcss').Config} */
import TailwindScrollbarHide from "tailwind-scrollbar-hide";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "footer-layout":
          "minmax(0px, 38%) minmax(0px, 18%) minmax(0px, 18%) minmax(0px, 26%)",
      },
    },
  },
  plugins: [TailwindScrollbarHide],
};
