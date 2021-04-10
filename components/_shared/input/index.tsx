import styled from "styled-components";

export const Input = styled.input`
  min-width: 15.5rem;
  height: 3rem;
  border: 0.0625rem solid ${(props) => props.theme.colors.secondary};
  border-radius: 0.25rem;
  color: ${(props) => props.theme.colors.black};
  padding: 1rem;  
  &:active {
    border: 0.0625rem solid ${(props) => props.theme.colors.primary};
  }
`;
