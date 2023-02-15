module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        talentRecruiter: {
          primary: "#84a59d",
          secondary: "#BA94D1",
          accent: "#658864", //
          neutral: "black", //
          "base-100": "#ffffff",
          info: "#658864", //
          success: "#5d3d84",
          // warning: "#40E0D0",
          error: "#FFB26B", //
          
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
