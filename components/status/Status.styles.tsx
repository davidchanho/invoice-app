import styled from "styled-components";
import { Props } from "./Styles.types";

const StyledStatus = styled.div<Props>`
  width: 100%;
  height: 100%;
  text-transform: capitalize;
  font-weight: 700;
  background-color: ${(props) =>
    props.status === "paid"
      ? props.theme.colors.lightSuccess
      : props.status === "pending"
      ? props.theme.colors.lightWarning
      : "blue"};
  color: ${(props) =>
    props.status === "paid"
      ? props.theme.colors.success
      : props.status === "pending"
      ? props.theme.colors.warning
      : "blue"};
 
`;

export default StyledStatus;
