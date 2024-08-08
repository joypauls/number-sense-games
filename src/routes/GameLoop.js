import React, { useState } from "react";
import { VStack, StackDivider, Heading, Button } from "@chakra-ui/react";

import CardGrid from "../components/CardGrid";

const COLUMNS = 2;
const PALETTE = ["blue", "orange", "green", "purple", "red"];
var cards = Array.from({ length: COLUMNS }).map((_, i) => ({
  number: i + 1,
  color: PALETTE[i],
  selected: false,
}));

export default function GameLoop() {
  const [selectedCardNumber, setSelectedCardNumber] = useState(null);

  const handleCardClick = number => {
    setSelectedCardNumber(number);
    console.log(`Selected card: ${number}`);
  };

  return (
    <VStack divider={<StackDivider borderColor="gray.200" />} spacing={6}>
      <Heading as="h3" size="lg">
        Choose the largest number
      </Heading>
      <CardGrid
        columns={COLUMNS}
        cards={cards}
        handleCardClick={handleCardClick}
        selectedCardNumber={selectedCardNumber}
      />
      <Button colorScheme="teal" size="lg">
        Validate
      </Button>
    </VStack>
  );
}
