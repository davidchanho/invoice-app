import React from "react";
import { SecondaryButton } from ".";
import { Icon } from "../icons";

function AddNewItemButton() {
  return (
    <SecondaryButton>
      <Icon
        src="/assets/icon-plus.svg"
        alt="add new item"
        width={30}
        height={30}
      />{" "}
      Add New Item
    </SecondaryButton>
  );
}

export default AddNewItemButton;
