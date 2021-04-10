import styled from "styled-components";

export const Main = styled.main`
  @media (min-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: flex;
    align-items: center;
  }
`;

export const Section = styled.section`
  width: 80%;
  margin: 0 auto;
`;
