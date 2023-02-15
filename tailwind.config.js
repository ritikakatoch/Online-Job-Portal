module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        talentRecruiter: {
          primary: "#1B415B",
          secondary: "#3276A8",
          accent: "#7FFFD4", //
          neutral: "#90949F", //
          "base-100": "#ffffff",
          info: "#98A8DD", //
          success: "#49ACF4",
          // warning: "#40E0D0",
          error: "#FA5C5C", //
          
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
