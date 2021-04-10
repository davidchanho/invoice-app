import styled from "styled-components";
import { RoundedIcon } from "../../_shared/icons";

export const LogoContainer = styled.div`
  padding: 1.5625rem;
  background: rgb(146, 119, 255);
  background: linear-gradient(
    0deg,
    rgba(146, 119, 255, 1) 51%,
    rgba(124, 93, 250, 1) 51%
  );

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    border-radius: 0 1.875rem 0 0;
  }
`;

export const Logo = styled(RoundedIcon)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
