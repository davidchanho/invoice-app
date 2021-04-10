import React from "react";
import { RoundedIcon } from "../../_shared/icons";
import { AvatarContainer } from "./Avatar.styles";

function Avatar() {
  return (
    <AvatarContainer>
      <RoundedIcon
        src="/assets/image-avatar.jpg"
        alt="avatar image"
        width={32}
        height={32}
      />
    </AvatarContainer>
  );
}

export default Avatar;
