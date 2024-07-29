import { ITheme } from "./types";

const defaultTheme: ITheme = {
  sizes: {
    small: "1.2rem",
    medium: "1.6rem",
    large: "2.4rem",
    xlarge: "3.2rem",
  },

  colors: {
    primary: "#FFA336",

    background: "#FFFFFF",

    text: "#242E35",

    white: "#FFFFFF",
    black: "#000000",

    success: "#008732",
    error: "#ea5455",

    hover: {
      primary: "#C96D00",
    },

    grey: {
      100: "#DBDBDB",
      200: "#AAAAAA",
      300: "#575757",
      400: "#E7E7E7",
      500: "#F7F7F7",
      600: "#D6D6D6",
    },
  },
};

export default defaultTheme;
