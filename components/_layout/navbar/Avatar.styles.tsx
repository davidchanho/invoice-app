import styled from "styled-components";

export const AvatarContainer = styled.div`
  padding: 1rem;
  border-left: 0.0625rem solid ${(props) => props.theme.colors.darker};

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    border-left: 0;
    border-top: 0.0625rem solid ${(props) => props.theme.colors.darker};
  }
`;
