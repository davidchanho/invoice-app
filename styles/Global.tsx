import { normalize } from "polished";
import { createGlobalStyle } from "styled-components";
import { grey } from "./colors";
import {
  fontFamily,
  header1,
  header2,
  header3,
  header4,
  paragraph1,
  paragraph2,
} from "./fonts";

const GlobalStyle = createGlobalStyle`
${normalize()}

html {
  box-sizing: border-box;
  @font-face {
    font-family: ${fontFamily};
    src: url('/fonts/Spartan-Bold.ttf') format("truetype");
    font-weight: 700;
  }
   @font-face {
    font-family: ${fontFamily};
    src: url('/fonts/Spartan-Medium.ttf') format("truetype");
    font-weight: 400;
  }
}

*, *:before, *:after {
  box-sizing: inherit;
}

body {

  font-family: ${fontFamily};
  font-size: 0.75rem;

  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  h1 {
    font-size: ${header1.fontSize};
    line-height: ${header1.lineHeight};
    letter-spacing: ${header1.letterSpacing};
    font-weight: 700;
  }

  h2 {
    font-size: ${header2.fontSize};
    line-height: ${header2.lineHeight};
    letter-spacing:  ${header2.letterSpacing};
    font-weight: 700;
  }

  h3 {
    font-size: ${header3.fontSize};
    line-height: ${header3.lineHeight};
    letter-spacing:  ${header3.letterSpacing};
    font-weight: 700;
  }

  h4 {
    font-size: ${header4.fontSize};
    line-height: ${header4.lineHeight};
    letter-spacing:  ${header4.letterSpacing};
    font-weight: 700;
  }

  p {
    font-size: ${paragraph1.fontSize};
    line-height: ${paragraph1.lineHeight};
    letter-spacing:  ${paragraph1.letterSpacing};
    font-weight: 400;

    &.helper {
      font-size: ${paragraph2.fontSize};
      line-height: ${paragraph2.lineHeight};
      letter-spacing:  ${paragraph2.letterSpacing};
      font-weight: 400;
    }
  }

  ul {
    padding: 0;
    list-style-type: none;
  }
}

`;

export default GlobalStyle;
