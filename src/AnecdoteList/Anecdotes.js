import React from "react";
import Anecdote from "./Anecdote";

function Anecdotes({ anecdotes, votes, currentAnecdote }) {
  const zips = anecdotes
    .map((anecdote, index) => {
      return { anecdote: anecdote, votes: votes[index] };
    })
    .sort((a1, a2) => a2.votes - a1.votes);

  return (
    <div>
      {zips.map(({ anecdote, votes }) => (
        <Anecdote
          key={anecdote}
          anecdote={anecdote}
          votes={votes}
          isCurrent={currentAnecdote === anecdote}
        />
      ))}
    </div>
  );
}

export default Anecdotes;
