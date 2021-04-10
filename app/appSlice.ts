import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface IAppState {
  darkMode: boolean;
  filterStatus: string;
  drawerOpen: boolean;
}

const initialState: IAppState = {
  darkMode: false,
  filterStatus: "all",
  drawerOpen: false,
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
    toggleDrawer: (state) => {
      state.drawerOpen = !state.drawerOpen;
    },
  },
});

export const { toggleDarkMode, changeStatus, toggleDrawer } = appSlice.actions;
export default appSlice.reducer;

export const selectApp = (state: RootState) => state.app;
