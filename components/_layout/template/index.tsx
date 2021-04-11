import React from "react";
import { ThemeProvider } from "styled-components";
import { selectApp } from "../../../app/appSlice";
import { useAppSelector } from "../../../app/hooks";
import { darkTheme, lightTheme } from "../../../styles/theme";
import NextHead from "../head";
import SideBar from "../navbar";
import { Backdrop, Main, Section } from "./Template.styles";

function Template({ children }) {
  const { darkMode, isPromptOpen, drawerOpen } = useAppSelector(selectApp);
  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <NextHead />
      <Main>
        <SideBar />
        <Backdrop isPromptOpen={isPromptOpen} drawerOpen={drawerOpen}>
          <Section>{children}</Section>
        </Backdrop>
      </Main>
    </ThemeProvider>
  );
}

export default Template;
