import React from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import styled, { ThemeProvider } from "styled-components";
import { selectApp } from "../../../app/appSlice";
import { useAppSelector } from "../../../app/hooks";
import { darkTheme, lightTheme } from "../../../styles/theme";
import NextHead from "../head";
import SideBar from "../navbar";

const Section = styled.section`
  width: 80%;
  margin: 0 auto;
`;

function Template({ children }) {
  const { darkMode } = useAppSelector(selectApp);

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <SkeletonTheme>
        <NextHead />
        <div>
          <SideBar />
          <Section>{children}</Section>
        </div>
      </SkeletonTheme>
    </ThemeProvider>
  );
}

export default Template;
