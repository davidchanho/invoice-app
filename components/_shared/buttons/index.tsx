import { between } from "polished";
import styled from "styled-components";

export const Button = styled.button`
  border-radius: 24px;
  width: ${between("73px", "120px")};
  height: 48px;
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: bold;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PrimaryButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.textColorOnPrimary};
  
  &:hover {
    background-color: ${(props) => props.theme.colors.primaryHover};
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
