import styled from "styled-components";

export const Button = styled.button`
  border-radius: 24px;
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
  width: 150px;

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryHover};
  }
`;

export const DangerButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.danger};
  color: ${(props) => props.theme.colors.textColorOnDanger};
  width: 89px;

  &:hover {
    background-color: ${(props) => props.theme.colors.dangerHover};
  }
`;

export const SecondaryButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.textColorOnSecondary};
  width: 73px;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondaryHover};
    color: ${(props) => props.theme.colors.textColorOnSecondary};
  }
`;

export const TertiaryButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.textColorOnTertiary};
  width: 73px;

  &:hover {
    background-color: ${(props) => props.theme.colors.tertiaryHover};
    color: ${(props) => props.theme.colors.textColorOnTertiary};
  }
`;

export const QuaternaryButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.quaternary};
  color: ${(props) => props.theme.colors.textColorOnQuaternary};
  width: 73px;

  &:hover {
    background-color: ${(props) => props.theme.colors.quaternaryHover};
    color: ${(props) => props.theme.colors.textColorOnQuaternary};
  }
`;
