import React from "react";
import styled from "styled-components";
import DeleteButton from "../invoice-details/DeleteButton";

const StyledPrompt = styled.div`
  
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
        <button>cancel</button>
        <DeleteButton />
      </footer>
    </StyledPrompt>
  );
}

export default Prompt;
