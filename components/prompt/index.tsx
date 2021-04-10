import React from "react";
import CancelButton from "../_shared/buttons/CancelButton";
import DeleteButton from "../_shared/buttons/DeleteButton";
import { PromptContainer, PromptFooter } from "./Prompt.styles";

function Prompt() {
  return (
    <PromptContainer>
      <h1>Confirm Deletion</h1>
      <p>
        Are you sure you want to delete invoice #XM9141? This action cannot be
        undone.
      </p>
      <PromptFooter>
        <CancelButton />
        <DeleteButton />
      </PromptFooter>
    </PromptContainer>
  );
}

export default Prompt;
