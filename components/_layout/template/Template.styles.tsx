import styled from "styled-components";
import { transitionColor } from "../../../styles/animations";

export const Main = styled.main`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};

  transition: ${transitionColor};

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: flex;
  }
`;

export const Section = styled.section`
  min-height: 100vh;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 64%;
    margin: 0 auto;
  }
`;

interface Props {
  isPromptOpen: boolean;
  drawerOpen: boolean;
}

export const Backdrop = styled.section<Props>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  background-color: ${(props) =>
    props.isPromptOpen || props.drawerOpen
      ? props.theme.colors.dark
      : "transparent"};
  opacity: ${(props) => (props.isPromptOpen ? 0.6 : 1)};
  transition: background-color 0.35s ease-in-out;
`;
