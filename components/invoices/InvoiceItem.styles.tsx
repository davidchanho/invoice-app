import styled from "styled-components";

const Item = styled.li`
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0px 10px 10px -10px hsla(231.72, 37.66%, 45.29%, 10.04%);
  height: 72px;
  width: 100%;
  padding: 39px 29px;
  margin-bottom: 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondaryHover};
    cursor: pointer;
    transition: background-color 350ms ease-in-out;
  }

  p {
    margin-right: 29px;
    width: 10%;
    &:last-child {
      width: 0;
    }
  }
`;

export default Item