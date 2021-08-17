import React from "react";

function Anecdote({ anecdote, votes }) {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: "1" }}>{anecdote}</div>
      <div style={{ flex: "initial" }}>{votes}</div>
    </div>
  );
}

export default Anecdote;
