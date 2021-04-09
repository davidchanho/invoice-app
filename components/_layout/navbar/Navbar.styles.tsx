import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.dark};
  .spacer {
    flex: 0.9;
  }
  div {
    border-left: 1px solid ${(props) => props.theme.colors.black};
    padding-left: 30px;
  }
`;

export default Nav;
