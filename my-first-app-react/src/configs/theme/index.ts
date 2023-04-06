import { DefaultTheme } from "styled-components";

const lightTheme: DefaultTheme = {
  name: "light",

  colors: {
    primary: "#0070f3",
    secondary: "#0070f3",
    error: "#f44336",
    success: "#4caf50",
    info: "#2196f3",
  },

  bgColor: "#fafafa",
  borderRadius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
  },

  fontSizes: {
    sm: "12px",
    md: "14px",
    lg: "36px",
  }
}

const darkTheme: DefaultTheme = {
  name: "dark",

  colors: {
    primary: "#0070f3",
    secondary: "#0070f3",
    error: "#f44336",
    success: "#4caf50",
    info: "#2196f3",
  },

  bgColor: "#121212",

  borderRadius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
  },

  fontSizes: {
    sm: "12px",
    md: "14px",
    lg: "36px",
  },
}

export { lightTheme, darkTheme };