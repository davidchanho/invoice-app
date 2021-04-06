import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface IAppState {
  darkMode: boolean;
  filterStatus: string;
}

const initialState: IAppState = {
  darkMode: false,
  filterStatus: "all",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    changeStatus: (state, action: PayloadAction<string>) => {
      state.filterStatus = action.payload;
    },
  },
});

export const { toggleDarkMode, changeStatus } = appSlice.actions;
export default appSlice.reducer;

export const selectApp = (state: RootState) => state.app;
