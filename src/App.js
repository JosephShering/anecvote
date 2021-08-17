import React, { useEffect, useState } from "react";
import { Anecdotes } from "./AnecdoteList";
import { Box, Button, Text, Container } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
// Users can click through anecdotes and vote on their favorite one.

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
    <ChakraProvider>
      <Container p={8} textColor="gray.600" maxW="4xl">
        <Button onClick={vote}>Vote for this Anecdote</Button>
        <Button
          colorScheme="blue"
          onClick={next}
          ml="2"
          rightIcon={<ArrowRightIcon />}
        >
          Next Anecdote
        </Button>

        <br />

        <Text fontSize="sm" fontWeight="bold" mt={10} mb={2}>
          CURRENT ANECDOTE:
        </Text>

        <Box>
          <Text fontSize="2xl" mb={10} fontWeight="bold">
            {anecdotes[selectedAnecdote]}
          </Text>
        </Box>

        <Text fontSize="sm" fontWeight="bold" mt={10} mb={2}>
          ANECDOTES:
        </Text>
        <Anecdotes
          votes={votes}
          anecdotes={anecdotes}
          currentAnecdote={anecdotes[selectedAnecdote]}
        />
      </Container>
    </ChakraProvider>
  );
}

export default App;
