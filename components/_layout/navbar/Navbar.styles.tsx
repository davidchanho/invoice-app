import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.dark};
  margin-bottom: 3.8125rem;
  
  .spacer {
    flex: 0.9;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    height: 100vh;
  }
`;

export default Nav;
