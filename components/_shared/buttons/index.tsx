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
    background-color: ${(props) => props.theme.colors.lightPrimary};
  }
`;

export const DangerButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.danger};

  &:hover {
    background-color: ${(props) => props.theme.colors.lightDanger};
  }
`;

export const SecondaryButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.lightSecondary};
  color: ${(props) => props.theme.colors.lightSecondary};

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.secondary};
  }
`;

export const DarkButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.lightDark};

  &:hover {
    background-color: ${(props) => props.theme.colors.dark};
  }
`;
