import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.dark};
  margin-bottom: 3.8125rem;
  position: fixed;
  z-index: 10;
  .spacer {
    flex: 0.9;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: column;
    border-radius: 0 1.875rem 1.875rem 0;
    height: 100vh;
  }
`;

export default Nav;
