import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.dark};
  margin-bottom: 61px;
  .spacer {
    flex: 0.9;
  }
`;

export default Nav;
