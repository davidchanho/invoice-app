import styled from "styled-components";
import { Props } from "./Styles.types";

const StyledStatus = styled.div<Props>`
  text-transform: capitalize;
  font-weight: 700;
  height: 3.33rem;
  width: 8.67rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors[`${props.status}Hover`]};
  color: ${(props) => props.theme.colors[props.status]};
  span {
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors[props.status]};
    width: 0.66rem;
    height: 0.66rem;
    margin-right: 5px;
  }
`;

export default StyledStatus;
