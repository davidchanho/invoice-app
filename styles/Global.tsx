import { normalize } from "polished";
import { createGlobalStyle } from "styled-components";
import Colors from "./colors";

const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  font-size: 16px;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body {
  ${normalize()}

  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${Colors.lightSecondary}

  h1 {
  }
  h2 {
  }
  h3 {
  }
  h4 {
  }
  h5 {
  }
  p {

    &.helper {
    }
  }
 
  small {
  }
}
ul {
  padding: 0;
  list-style-type: none;
}
`;

export default GlobalStyle;
