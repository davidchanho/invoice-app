import React from "react";
import { SecondaryButton } from ".";
import { selectApp, toggleDrawer } from "../../../app/appSlice";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";

function EditButton() {
  const dispatch = useAppDispatch();
  const { isPromptOpen, drawerOpen } = useAppSelector(selectApp);

  const onOpen = () => {
    dispatch(toggleDrawer());
  };

  return (
    <SecondaryButton disabled={isPromptOpen || drawerOpen} onClick={onOpen}>
      Edit
    </SecondaryButton>
  );
}

export default EditButton;
