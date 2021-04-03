import { applyMiddleware } from "@reduxjs/toolkit";
import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import invoicesReducer from "./invoicesSlice";

const rootReducer = combineReducers({
  invoices: invoicesReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const middlewares = [thunk, logger];

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
