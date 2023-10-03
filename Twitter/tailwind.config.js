/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "defaultBlue": "#1D9BF0",
        "hoverBlue": "#1871CA",
        "disabledBlue": "#1E5D87",
        "blueWash": "#75BEEF",
        "buttonStroke": "#546A7A",
        "SearchBarFill": "#212327",
        "cardFill": "#16181C",
        "success": "#00BE74" ,
        "Error":"#8B141A",
        "Neutral/50": "#F9F9F9",
        "Neutral/100": "#F4F4F4",
        "Neutral/200": "#E4E4E4",
        "Neutral/300": "#D3D3D3",
        "Neutral/400": "#A2A2A2",
        "Neutral/500": "#737373",
        "Neutral/600": "#525252",
        "Neutral/700": "#404040",
        "Neutral/800": "#262626",
        "Neutral/900": "#171717",
        "Neutral/950": "#0A0A0A",
        "Neutral/1000": "#000000"
      }

    },
     textUnderlineOffset:{
       "7":"7px",
       "6":"6px",
       "5":"5px"
     },
     
     width:{
      "128":"32rem",
      "48":"12rem",
      "600":"150rem",
      "286":"71.5rem",
      "324":"81rem",
      "155":"40rem",
      "320":"80rem"
     },

     height:{
      "88":"88px",
      "335":"335px",
      "143":"143px",
      "48":"12rem",
      "220":"55rem",
      "19":"4.75rem",

     },

     margin:{
      "276":"69rem",
      
  }, 
      

  plugins: [],
}
}

