import React from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "styled-components";
import store, { persistor } from "../app/store";
import GlobalStyle from "../styles/Global";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <SkeletonTheme color="#000000" highlightColor="#444">
            <GlobalStyle />
            <Component {...pageProps} />
          </SkeletonTheme>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
