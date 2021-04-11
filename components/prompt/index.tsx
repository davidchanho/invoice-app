import React from "react";
import { closePrompt, openPrompt, selectApp } from "../../app/appSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { DangerButton, SecondaryButton } from "../_shared/buttons";
import { PromptContainer, PromptFooter } from "./Prompt.styles";

function Prompt() {
  const { isPromptOpen, drawerOpen } = useAppSelector(selectApp);
  const dispatch = useAppDispatch();
  const handleOpen = () => {
    dispatch(openPrompt());
  };

  const handleClose = () => {
    dispatch(closePrompt());
  };

  return (
    <>
      <DangerButton disabled={drawerOpen || isPromptOpen} onClick={handleOpen}>
        Delete
      </DangerButton>

      <PromptContainer openPrompt={isPromptOpen}>
        <h1>Confirm Deletion</h1>
        <p>
          Are you sure you want to delete invoice #XM9141? This action cannot be
          undone.
        </p>
        <PromptFooter>
          <SecondaryButton onClick={handleClose}>Cancel</SecondaryButton>
          <DangerButton onClick={handleClose}>Delete</DangerButton>
        </PromptFooter>
      </PromptContainer>
    </>
  );
}

export default Prompt;
