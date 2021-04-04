import React, { PropsWithChildren } from "react";
import StyledStatus from "./Status.styles";
import { Props } from "./Styles.types";

function Status({ status, children }: PropsWithChildren<Props>) {
  return (
    <StyledStatus
      status={
        status === "paid"
          ? "success"
          : status === "pending"
          ? "warning"
          : "blue"
      }
    >
      <span /> {children}
    </StyledStatus>
  );
}

export default Status;
