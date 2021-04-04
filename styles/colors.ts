const primary = {
  "100": "hsl(252, 100%, 73%)",
  "200": "hsl(252, 94%, 67%)",
};

const danger = {
  "100": "hsl(0, 100%, 80%)",
  "200": "hsl(0, 80%, 63%)",
};

const success = {
  "100": "hsla(160, 67%, 52%, 0.0571)",
  "200": "hsl(160, 67%, 52%)",
};

const warning = {
  "100": "hsla(34, 100%, 50%, 0.0571)",
  "200": "hsl(34, 100%, 50%)",
};

const grey = {
  "100": "hsl(240, 27%, 98%)",
  "200": "hsl(231, 73%, 93%)",
  "300": "hsl(231, 37%, 63%)",
  "400": "hsl(231, 20%, 61%)",
  "500": "hsl(231, 20%, 27%)",
  "600": "hsl(232, 20%, 36%)",
};

const white = {
  "100": "hsl(0, 0%, 100%)",
};

const black = {
  "100": "hsl(233, 30%, 21%)",
  "200": "hsl(233, 31%, 17%)",
  "300": "hsl(228, 29%, 7%)",
  "400": "hsl(233°, 30%, 11%)",
};

const Colors = {
  lightPrimary: primary["100"],
  primary: primary["200"],

  lightSecondary: grey["100"],
  secondary: grey["200"],
  darkSecondary: grey["300"],
  darkerSecondary: grey["400"],
  darkestSecondary: grey["500"],

  lightDanger: danger["100"],
  danger: danger["200"],

  lightSuccess: success["100"],
  success: success["200"],

  lightWarning: warning["100"],
  warning: warning["200"],

  darkBackground: black["400"],
  ...black,
  white: white["100"],
};

export default Colors;
