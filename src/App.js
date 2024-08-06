import React from "react";
import {
  ChakraProvider,
  Container,
  VStack,
  StackDivider,
  theme,
} from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import CardGrid from "./components/CardGrid";

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar>
        <Container maxW="container.lg" my={8}>
          <VStack divider={<StackDivider borderColor="gray.200" />} spacing={6}>
            <CardGrid columns={2} />
            <CardGrid columns={3} />
            <CardGrid columns={4} />
            <CardGrid columns={5} />
          </VStack>
        </Container>
      </Navbar>
    </ChakraProvider>
  );
}
