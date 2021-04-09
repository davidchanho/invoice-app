import React from "react";
import styled from "styled-components";
import { RoundedIcon } from "../icons";

const Bg = styled.div`
  padding: 32px;
  border-left: 1px solid ${(props) => props.theme.colors.darker};
`;

function Avatar() {
  return (
    <Bg>
      <RoundedIcon
        src="/assets/image-avatar.jpg"
        alt="avatar image"
        width={32}
        height={32}
      />
    </Bg>
  );
}

export default Avatar;
