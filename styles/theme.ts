import { black, green, grey, purple, red, white, yellow } from "./colors";

export const defaultTheme = {
  colors: {
    primary: purple["200"],
    primaryHover: purple["100"],
    textColorOnPrimary: white["100"],

    secondary: grey["100"],
    secondaryHover: grey["200"],
    textColorOnSecondary: grey["300"],

    danger: red["200"],
    dangerHover: red["100"],
    textColorOnDanger: white["100"],
    
    successHover: green["100"],
    success: green["200"],
    textColorOnSuccess: white["100"],

    warningHover: yellow["100"],
    warning: yellow["200"],
    textColorOnWarning: white["100"],

    white: white["100"],

    dark: grey["500"],
    black: black["500"],
  },
};

export const lightTheme = {
  ...defaultTheme,

  colors: {
    ...defaultTheme.colors,

    tertiary: grey["700"],
    tertiaryHover: grey["200"],
    textColorOnTertiary: grey["200"],

    quaternary: grey["500"],
    quaternaryHover: black["300"],
    textColorOnQuaternary: grey["400"],

    background: grey["100"],
  },
};

export const darkTheme = {
  ...defaultTheme,

  colors: {
    ...defaultTheme.colors,

    tertiary: grey["100"],
    tertiaryHover: black["100"],
    textColorOnTertiary: grey["200"],

    quaternary: grey["500"],
    quaternaryHover: grey["200"],
    textColorOnQuaternary: black["200"],

    background: black["400"],
  },
};
