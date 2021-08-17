import React from "react";
import { Flex, Text } from "@chakra-ui/react";

function Anecdote({ anecdote, votes, isCurrent }) {
  return (
    <Flex my={4} alignItems="center">
      <Text textAlign="center" flex="1" fontSize="3xl" fontWeight="bold">
        {votes}
      </Text>
      <Text
        flex={20}
        h={16}
        ml={2}
        pl={2}
        borderLeftColor={isCurrent ? "tomato" : "gray.400"}
        borderLeftWidth={4}
      >
        {anecdote}
      </Text>
    </Flex>
  );
}

export default Anecdote;
