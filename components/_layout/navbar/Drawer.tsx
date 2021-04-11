import styled from "styled-components";

const Drawer = styled.aside`
  position: absolute;
  height: 100%;
  width: 22.5rem;
  background-color: ${(props) => props.theme.colors.white};
  top: 0;
  left: 0;
  z-index: 100;
  border-radius: 0 1.25rem 1.25rem 0;
  animation: drawer-out 0.35s forwards ease-in-out;
  border: 0.0625rem solid red;
  
  @keyframes drawer-out {
    from {
      left: -4%;
    }
    to {
      left: 4%;
    }
  }
`;

export default Drawer;
