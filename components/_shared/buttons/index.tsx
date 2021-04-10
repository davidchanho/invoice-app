import styled from "styled-components";

export const Button = styled.button`
  border-radius: 1.5rem;
  height: 3rem;
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
  color: ${(props) => props.theme.colors.primarytext};
  width: 9.375rem;

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryHover};
  }
`;

export const DangerButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.danger};
  color: ${(props) => props.theme.colors.dangerText};
  width: 5.5625rem;

  &:hover {
    background-color: ${(props) => props.theme.colors.dangerHover};
  }
`;

export const SecondaryButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.secondaryText};
  width: 4.5625rem;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondaryHover};
  }
`;

export const TertiaryButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.tertiaryText};
  width: 4.5625rem;

  &:hover {
    background-color: ${(props) => props.theme.colors.tertiaryHover};
  }
`;

export const QuaternaryButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.quaternary};
  color: ${(props) => props.theme.colors.quaternaryText};
  width: 4.5625rem;

  &:hover {
    background-color: ${(props) => props.theme.colors.quaternaryHover};
  }
`;
