import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Anecdotes } from "./AnecdoteList";
// Users can click through anecdotes and vote on their favorite one.

const NewButton = styled.button`
  padding: 32px;
`;

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
];

function App() {
  const [selectedAnecdote, setSelectedAnecdote] = useState(0);
  const [votes, setVotes] = useState(anecdotes.map(() => 0));

  const next = () => {
    setSelectedAnecdote((selectedAnecdote + 1) % anecdotes.length);
  };

  const vote = () => {
    const votesCopy = [...votes];
    votesCopy[selectedAnecdote] += 1;
    setVotes(votesCopy);
  };

  useEffect(() => {}, [votes]);

  return (
    <div>
      <NewButton onClick={next}>Next Anecdote</NewButton>
      <NewButton onClick={vote}>Vote for this anecdote</NewButton>

      <br />

      <h1>{anecdotes[selectedAnecdote]}</h1>

      <Anecdotes votes={votes} anecdotes={anecdotes} />
    </div>
  );
}

export default App;
