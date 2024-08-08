import React from "react";
import { VStack, StackDivider, Heading } from "@chakra-ui/react";

import CardGrid from "../components/CardGrid";

export default function GameLoop() {
  return (
    <VStack divider={<StackDivider borderColor="gray.200" />} spacing={6}>
      <Heading>Select the larger set</Heading>
      <CardGrid columns={2} />
    </VStack>
  );
}
