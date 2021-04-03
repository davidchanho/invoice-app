import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import store from "../app/store";
import GlobalStyle from "../styles/Global";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
