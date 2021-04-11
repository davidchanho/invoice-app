import styled from "styled-components";
import { drawerOut } from "../../../styles/animations";

const Drawer = styled.aside`
  position: absolute;
  height: 100%;
  width: 40%;
  background-color: ${(props) => props.theme.colors.white};
  top: 0;
  left: 0;
  z-index: 1;
  border-radius: 0 1.25rem 1.25rem 0;
  padding: 3% 5%;
  animation: ${drawerOut} 0.35s forwards ease-in-out;

`;

export default Drawer;
