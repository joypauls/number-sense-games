import React from "react";
import { ChakraProvider, Container, theme } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import CardGrid from "./components/CardGrid";

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar>
        <Container maxW="container.lg" my={5}>
          <CardGrid />
        </Container>
      </Navbar>
    </ChakraProvider>
  );
}
