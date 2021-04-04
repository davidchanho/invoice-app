import styled from "styled-components";

export const Input = styled.input`
  width: 248px;
  height: 48px;
  border: 1px solid ${(props) => props.theme.colors.secondary};
  border-radius: 4px;
  color: ${(props) => props.theme.colors.black};

  &:active {
    border: 1px solid ${(props) => props.theme.colors.primary};
  }
`;
