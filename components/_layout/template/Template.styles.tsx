import styled from "styled-components";

export const Main = styled.main`
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: flex;
  }
`;
  
export const Section = styled.section`
  width: 100%;
`;
