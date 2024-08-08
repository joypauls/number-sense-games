import React from "react";
import { ChakraProvider, Container, Flex, theme } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Root() {
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <Flex minHeight="100vh" flexDirection="column">
          <Navbar>
            <Container maxW="container.lg" my={10} flexGrow={1}>
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
          <Footer />
        </Flex>
      </ChakraProvider>
    </div>
  );
}
