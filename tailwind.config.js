module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      display: ["group-hover"],
      container: {
        center: true,
        padding: '1rem'
      }, fontFamily: {
        Dongle: ['Dongle']
      },
   
    },
  },
  plugins: [],
}