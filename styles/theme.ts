import { black, green, grey, purple, red, white, yellow } from "./colors";

export const defaultTheme = {
  primary: purple["200"],
  primaryHover: purple["100"],
  textColorOnPrimary: white['100'],
  

  lightDanger: red["100"],
  danger: red["200"],

  lightSuccess: green["100"],
  success: green["200"],

  lightWarning: yellow["100"],
  warning: yellow["200"],

  white: white["100"],

  lightSecondary: grey["100"],
  secondary: grey["200"],
  darkSecondary: grey["300"],
  darkerSecondary: grey["400"],
  darkestSecondary: grey["500"],
};

export const lightTheme = {
  colors: {
    ...defaultTheme,
    button3: {
      bg: grey["700"],
      text: grey["200"],
      hover: grey["200"],
    },
    button4: {
      bg: grey["500"],
      text: grey["400"],
      hover: black["300"],
    },
    background: grey["100"],
  },
};

export const darkTheme = {
  colors: {
    ...defaultTheme,
    button3: {
      bg: grey["100"],
      text: black["100"],
      hover: grey["200"],
    },
    button4: {
      bg: grey["500"],
      text: grey["200"],
      hover: black["200"],
    },
    background: black["400"],
  },
};
