import React from "react";
import CancelButton from "../_shared/buttons/CancelButton";
import DeleteButton from "../_shared/buttons/DeleteButton";
import { PromptContainer } from "./Prompt.styles";

function Prompt() {
  return (
    <PromptContainer>
      <h1>Confirm Deletion</h1>
      <p>
        Are you sure you want to delete invoice #XM9141? This action cannot be
        undone.
      </p>
      <footer>
        <CancelButton />
        <DeleteButton />
      </footer>
    </PromptContainer>
  );
}

export default Prompt;
