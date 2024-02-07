/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        header: "url('../src/assets/images/bgheaderr.webp')",
        BgBtnJoin: "url('../src/assets/images/bg-btnjoin.webp')",
        // BgTimeline: "url(./assets/images/webp/timelinedhased.webp)",
      },
      backgroundSize: {
        Bgsize: "100% 100%",
      },
    },
  },
  plugins: [],
};
