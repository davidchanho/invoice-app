import styled from "styled-components";

const Form = styled.form`
  padding: 0 2rem;

  input {
    &:not([type="submit"]),
    &:not([type="reset"]) {
      min-width: 15.5rem;
      height: 3rem;
      border: 0.0625rem solid ${(props) => props.theme.colors.secondary};
      border-radius: 0.25rem;
      color: ${(props) => props.theme.colors.black};
      padding: 1rem;
      margin-top: 0.3rem;
      &:active {
        border: 0.0625rem solid ${(props) => props.theme.colors.primary};
      }
    }
  }
`;

export default Form;
