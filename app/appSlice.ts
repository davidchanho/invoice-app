import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface IAppState {
  darkMode: boolean;
  drawerOpen: boolean;
  isPromptOpen: boolean;
  filterStatus: string;
}

const initialState: IAppState = {
  darkMode: false,
  drawerOpen: false,
  isPromptOpen: false,
  filterStatus: "all",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    toggleDrawer: (state) => {
      state.drawerOpen = !state.drawerOpen;
    },
    closeDrawer: (state) => {
      state.drawerOpen = false;
    },
    closePrompt: (state) => {
      state.isPromptOpen = false;
    },
    openPrompt: (state) => {
      state.isPromptOpen = true;
    },
    changeStatus: (state, action: PayloadAction<string>) => {
      state.filterStatus = action.payload;
    },
  },
});

export const {
  toggleDarkMode,
  toggleDrawer,
  closeDrawer,
  closePrompt,
  openPrompt,
  changeStatus,
} = appSlice.actions;
export default appSlice.reducer;

export const selectApp = (state: RootState) => state.app;
