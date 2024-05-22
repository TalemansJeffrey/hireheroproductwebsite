/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
   
    extend: {
      fontFamily: {
        'epilogue': ['Epilogue', 'sans-serif']  
      },
      fontWeight: {
        'bolder' : '700'

      },
      colors: {
        darkBlue: "#97CAF9",
        lightBlue:"#C4E4F7",
        purple: "#9080FC",
        orange: "#FFDAB9",
        green: "#18DAC3",
        red: "#FA8072",
        black: "#111111",
        white: "#F3EFEF"
      }
    },
  },
  plugins: [],
}

