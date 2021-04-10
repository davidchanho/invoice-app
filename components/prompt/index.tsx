import React from "react";
import styled from "styled-components";
import CancelButton from "../_shared/buttons/CancelButton";
import DeleteButton from "../_shared/buttons/DeleteButton";

const StyledPrompt = styled.div`
  width: 30rem;
  height: 15.5625rem;
  padding: 3rem;
  border-radius: 0.5rem;
  footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;

function Prompt() {
  return (
    <StyledPrompt>
      <h1>Confirm Deletion</h1>
      <p>
        Are you sure you want to delete invoice #XM9141? This action cannot be
        undone.
      </p>
      <footer>
        <CancelButton />
        <DeleteButton />
      </footer>
    </StyledPrompt>
  );
}

export default Prompt;
