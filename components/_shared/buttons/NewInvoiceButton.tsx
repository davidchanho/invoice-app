import React from "react";
import { PrimaryButton } from ".";
import { Icon } from "../icons";

function NewInvoiceButton() {
  return (
    <PrimaryButton>
      <Icon
        src="/assets/icon-plus.svg"
        alt="add new invoice"
        width={30}
        height={30}
      />{" "}
      New Invoice
    </PrimaryButton>
  );
}

export default NewInvoiceButton;
