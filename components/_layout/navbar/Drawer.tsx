import styled from "styled-components";
import { drawerOut } from "../../../styles/animations";

const Drawer = styled.aside`
  position: absolute;
  height: 100%;
  width: 22.5rem;
  background-color: ${(props) => props.theme.colors.white};
  top: 0;
  left: 0;
  z-index: 100;
  border-radius: 0 1.25rem 1.25rem 0;
  animation: ${drawerOut} 0.35s forwards ease-in-out;
  border: 0.0625rem solid red;
`;

export default Drawer;
