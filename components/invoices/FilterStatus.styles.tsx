import styled from "styled-components";

export const Select = styled.div`
  background-color: inherit;
  margin-right: 0.9375rem;
  position: relative;
`;

export const Button = styled.button`
  outline: none;
  border: none;
  background-color: inherit;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.secondaryText};
  cursor: pointer;
  img {
    margin-left: 0.3125rem;
  }
`;

export const Form = styled.form`
  position: absolute;
  color: ${(props) => props.theme.colors.secondaryText};
  background-color: ${(props) => props.theme.colors.secondary};
`;
