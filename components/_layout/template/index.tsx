import React from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import { ThemeProvider } from "styled-components";
import { selectApp } from "../../../app/appSlice";
import { useAppSelector } from "../../../app/hooks";
import { darkTheme, lightTheme } from "../../../styles/theme";
import NextHead from "../head";
import SideBar from "../navbar";

function Template({ children }) {
  const { darkMode } = useAppSelector(selectApp);

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <SkeletonTheme color="#000000" highlightColor="#444">
        <NextHead />
        <div>
          <SideBar />
          {children}
        </div>
      </SkeletonTheme>
    </ThemeProvider>
  );
}

export default Template;
