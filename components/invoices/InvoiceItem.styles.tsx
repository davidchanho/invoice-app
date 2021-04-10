import styled from "styled-components";
import { transitionColor } from "../../styles/animations";
import Row from "../_shared/grid/Row";

const Item = styled(Row)`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.secondaryText};
  box-shadow: 0 0.625rem 0.625rem -0.625rem hsla(231.72, 37.66%, 45.29%, 10.04%);
  height: 4.5rem;
  width: 100%;
  padding: 2.4375rem 1.8125rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  transition: ${transitionColor};

  p {
    margin-right: 1.8125rem;
    width: 10%;
    &:last-child {
      width: 0;
    }
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.secondaryHover};
    cursor: pointer;
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

    p {
      color: ${(props) => props.theme.colors.quaternaryText};
    }
  }
`;

export default Item;
