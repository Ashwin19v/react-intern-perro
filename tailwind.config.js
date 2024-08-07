// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This includes all JS, JSX, TS, and TSX files in the src directory and its subdirectories
    "./public/index.html", // This includes the main HTML file
  ],
  theme: {
    extend: {
      colors: {
        peach: "#ffe8dc", // Add custom color
      },
    },
  },
  plugins: [],
};
