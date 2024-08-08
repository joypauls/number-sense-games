import React from "react";
import { VStack, StackDivider } from "@chakra-ui/react";

import CardGrid from "../components/CardGrid";

const PALETTE = ["blue", "orange", "green", "purple", "red"];
var cards2 = Array.from({ length: 2 }).map((_, i) => ({
  number: i + 1,
  color: PALETTE[i],
  selected: false,
}));
var cards3 = Array.from({ length: 3 }).map((_, i) => ({
  number: i + 1,
  color: PALETTE[i],
  selected: false,
}));
var cards4 = Array.from({ length: 4 }).map((_, i) => ({
  number: i + 1,
  color: PALETTE[i],
  selected: false,
}));

export default function Sandbox() {
  return (
    <VStack divider={<StackDivider borderColor="gray.200" />} spacing={6}>
      <CardGrid columns={2} cards={cards2} />
      <CardGrid columns={3} cards={cards3} />
      <CardGrid columns={4} cards={cards4} />
    </VStack>
  );
}
