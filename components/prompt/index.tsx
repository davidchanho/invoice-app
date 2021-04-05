import React from "react";
import styled from "styled-components";

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
        <button>delete</button>
      </footer>
    </StyledPrompt>
  );
}

export default Prompt;
