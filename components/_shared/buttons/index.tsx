import styled from "styled-components";

export const Button = styled.button`
  color: white;
  border-radius: 24px;
  width: 100%;
  height: 48px;
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: bold;
  text-transform: capitalize;
`;

export const PrimaryButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.primary};

  &:hover {
    background-color: ${(props) => props.theme.colors.hoverPrimary};
  }
`;

export const DangerButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.danger};

  &:hover {
    background-color: ${(props) => props.theme.colors.hoverDanger};
  }
`;
