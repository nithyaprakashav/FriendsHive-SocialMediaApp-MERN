export const colorTokens = {
    grey: {
      0: "#FFFFFF",
      10: "#F6F6F6",
      50: "#F0F0F0",
      100: "#E0E0E0",
      200: "#C2C2C2",
      300: "#A3A3A3",
      400: "#858585",
      500: "#666666",
      600: "#4D4D4D",
      700: "#333333",
      800: "#1A1A1A",
      900: "#0A0A0A",
      1000: "#000000",
    },
    primary: {
        50: "#F5F0FF",
        100: "#EADFFF",
        200: "#D6BFFF",
        300: "#C29FFF",
        400: "#AD7FFF",
        500: "#995FFF",
        600: "#804C99",
        700: "#663866",
        800: "#4D264C",
        900: "#331433",
      },
  };

  //mui Theme Settings

  export const themeSettings = (mode) => {
    return {
        palette: {
            mode:mode , 
            ...(mode === 'dark'? {
                //these are the pallete values for the dark mode
                primary:{
                    dark: colorTokens.primary[200],
                    main: colorTokens.primary[500],
                    light: colorTokens.primary[700],
                },
                neutral:{
                    dark: colorTokens.grey[100],
                    main: colorTokens.grey[200],
                    mediumMain: colorTokens.grey[300],
                    medium: colorTokens.grey[400],
                    light:colorTokens.grey[700],
                },
                background: {
                    default : colorTokens.grey[900],
                    alt : colorTokens.grey[800],
                },
            } : {
                //color palette for light mode
                primary:{
                    dark: colorTokens.primary[700],
                    main: colorTokens.primary[500],
                    light: colorTokens.primary[300]
                },
                neutral:{
                    dark: colorTokens.grey[700],
                    main: colorTokens.grey[500],
                    mediumMain: colorTokens.grey[400],
                    medium: colorTokens.grey[300],
                    light:colorTokens.grey[50]
                },
                background: {
                    default : colorTokens.grey[10],
                    alt : colorTokens.grey[0]
                },
            }),
        },
        typography: {
            fontFamily: ["Poppins", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Poppins", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Poppins", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Poppins", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Poppins", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Poppins", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["Poppins", "sans-serif"].join(","),
                fontSize: 14,
            },
        },
    }
  }