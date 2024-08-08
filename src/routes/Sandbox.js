import React from "react";
import { VStack, StackDivider } from "@chakra-ui/react";

import CardGrid from "../components/CardGrid";

export default function Sandbox() {
  return (
    <VStack divider={<StackDivider borderColor="gray.200" />} spacing={6}>
      <CardGrid columns={2} />
      <CardGrid columns={3} />
      <CardGrid columns={4} />
      <CardGrid columns={5} />
    </VStack>
  );
}
