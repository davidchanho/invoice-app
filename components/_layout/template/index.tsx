import React from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import { ThemeProvider } from "styled-components";
import { selectApp } from "../../../app/appSlice";
import { useAppSelector } from "../../../app/hooks";
import { darkTheme, lightTheme } from "../../../styles/theme";
import NextHead from "../head";
import SideBar from "../navbar";
import { Main, Section } from "./Template.styles";

function Template({ children }) {
  const { darkMode } = useAppSelector(selectApp);
  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <SkeletonTheme>
        <NextHead />
        <Main>
          <SideBar />
          <Section>{children}</Section>
        </Main>
      </SkeletonTheme>
    </ThemeProvider>
  );
}

export default Template;
