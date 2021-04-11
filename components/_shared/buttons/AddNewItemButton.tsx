import React from "react";
import { SecondaryButton } from ".";
import PlusIcon from "../icons/PlusIcon";

function AddNewItemButton() {
  return (
    <SecondaryButton>
      <PlusIcon width={30} height={30} /> Add New Item
    </SecondaryButton>
  );
}

export default AddNewItemButton;
