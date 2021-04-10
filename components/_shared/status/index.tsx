import React, { PropsWithChildren } from "react";
import StyledStatus, { Dot } from "./Status.styles";
import { Props } from "./Styles.types";

function Status({ status, children }: PropsWithChildren<Props>) {
  if (!status) {
    return null;
  }

  const s =
    status === "paid"
      ? "success"
      : status === "pending"
      ? "warning"
      : "tertiary";

  return (
    <StyledStatus status={s}>
      <Dot status={s} /> {children}
    </StyledStatus>
  );
}

export default Status;
