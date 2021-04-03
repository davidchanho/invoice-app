import React from "react";

function Prompt() {
  return (
    <div>
      <h1>Confirm Deletion</h1>
      <p>
        Are you sure you want to delete invoice #XM9141? This action cannot be
        undone.
      </p>
      <footer>
        <button>cancel</button>
        <button>delete</button>
      </footer>
    </div>
  );
}

export default Prompt;
