import React from "react";
import { SecondaryButton } from ".";
import { toggleDrawer } from "../../../app/appSlice";
import { useAppDispatch } from "../../../app/hooks";

function EditButton() {
  const dispatch = useAppDispatch();

  const onOpen = () => {
    dispatch(toggleDrawer());
  };

  return <SecondaryButton onClick={onOpen}>Edit</SecondaryButton>;
}

export default EditButton;
