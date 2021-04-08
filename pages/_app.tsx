import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "../app/store";
import GlobalStyle from "../styles/Global";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyle />
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
