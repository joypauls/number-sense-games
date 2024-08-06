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
        <Container maxW="container.lg" my={5} sy={5}>
          <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4}>
            <CardGrid columns={2} />
            <CardGrid columns={3} />
          </VStack>
        </Container>
      </Navbar>
    </ChakraProvider>
  );
}
