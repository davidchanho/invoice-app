import { breakpoints } from './breakpoints';
import { black, green, grey, purple, red, white, yellow } from "./colors";

export const defaultTheme = {
  colors: {
    primary: purple["200"],
    primaryHover: purple["100"],
    primaryText: white["100"],

    secondary: grey["100"],
    secondaryHover: grey["200"],
    secondaryText: grey["300"],

    danger: red["200"],
    dangerHover: red["100"],
    dangerText: white["100"],

    successHover: green["100"],
    success: green["200"],
    successText: white["100"],

    warningHover: yellow["100"],
    warning: yellow["200"],
    warningText: white["100"],

    white: white["100"],

    dark: grey["500"],
    darker: grey['600'],
    black: black["500"],
  },
  breakpoints,
};

export const lightTheme = {
  ...defaultTheme,

  colors: {
    ...defaultTheme.colors,

    tertiary: grey["700"],
    tertiaryHover: grey["200"],
    tertiaryText: grey["200"],

    quaternary: grey["500"],
    quaternaryHover: black["300"],
    quaternaryText: grey["400"],

    background: grey["100"],
  },
};

export const darkTheme = {
  ...defaultTheme,

  colors: {
    ...defaultTheme.colors,

    tertiary: grey["100"],
    tertiaryHover: black["100"],
    tertiaryText: grey["200"],

    quaternary: grey["500"],
    quaternaryHover: grey["200"],
    quaternaryText: black["200"],

    background: black["400"],
  },
};
