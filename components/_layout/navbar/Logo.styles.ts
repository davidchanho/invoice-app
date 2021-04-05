import styled from "styled-components";
import { RoundedIcon } from "../../_shared/icons";

const Logo = styled(RoundedIcon)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(146, 119, 255);
  background: linear-gradient(
    0deg,
    rgba(146, 119, 255, 1) 51%,
    rgba(124, 93, 250, 1) 51%
  );
`;

export default Logo;
