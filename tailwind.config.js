const plugin = require("tailwindcss/plugin")

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".bg-hero": {
          "background-image": "url(./assets/header.png)"
        }
      })
    })
  ],
}
