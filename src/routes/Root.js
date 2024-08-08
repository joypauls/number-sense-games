import React from "react";
import {
  ChakraProvider,
  Container,
  VStack,
  StackDivider,
  theme,
} from "@chakra-ui/react";
import { Outlet, Link } from "react-router-dom";

import Navbar from "../components/Navbar";

export default function Root() {
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <Navbar>
          <Container maxW="container.lg" my={8}>
            <Outlet />
            {/* <VStack
              divider={<StackDivider borderColor="gray.200" />}
              spacing={6}
            >
              <CardGrid columns={2} />
              <CardGrid columns={3} />
              <CardGrid columns={4} />
              <CardGrid columns={5} />
            </VStack> */}
          </Container>
        </Navbar>
      </ChakraProvider>
    </div>
  );
}
