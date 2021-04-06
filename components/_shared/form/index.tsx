import styled from "styled-components";

const Form = styled.form`
  padding: 0 2rem;

  input {
    &:not([type="submit"]),
    &:not([type="reset"]) {
      min-width: 248px;
      height: 48px;
      border: 1px solid ${(props) => props.theme.colors.secondary};
      border-radius: 4px;
      color: ${(props) => props.theme.colors.black};
      padding: 1rem;
      margin-top: 0.3rem;
      &:active {
        border: 1px solid ${(props) => props.theme.colors.primary};
      }
    }
  }
`;

export default Form;
