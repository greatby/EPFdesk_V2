module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        matter:['Matter','sans-serif']
        // roboto: ["Roboto", "san-serif"],
      },
      transform: ["group-hover"],
    },
    safelist: [
      "bg-rose-100",
      "bg-yellow-100",
      "bg-blue-100",
      "bg-green-100",
      "bg-purple-100",
      "border-rose-200",
      "border-yellow-200",
      "border-blue-200",
      "border-green-200",
      "border-purple-200",
    ],
  },
  plugins: [],
};
