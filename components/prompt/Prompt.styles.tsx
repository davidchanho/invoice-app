import styled from "styled-components";

interface Props {
  openPrompt: boolean;
}

export const PromptContainer = styled.div<Props>`
  width: 30rem;
  height: 15.5625rem;
  padding: 3rem;
  border-radius: 0.5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.colors.white};
  visibility: ${(props) => (props.openPrompt ? "visible" : "hidden")};
  opacity: ${(props) => (props.openPrompt ? 1 : 0)};
  transition: opacity 0.35s ease-in-out;
  z-index: 100;
`;

export const PromptFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  button {
    &:first-child {
      margin-right: 0.625rem;
    }
  }
`;
