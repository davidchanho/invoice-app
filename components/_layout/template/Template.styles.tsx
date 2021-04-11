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
