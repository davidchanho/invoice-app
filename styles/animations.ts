import { keyframes } from "styled-components";

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const drawerOut = keyframes`
  from {
    left: -4%;
  }
  to {
    left: 4%;
  }
`;

export const transitionColor =
  "background-color 1s ease-in-out, color 1s ease-in-out";
