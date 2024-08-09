import React, { useState } from "react";
import {
  VStack,
  StackDivider,
  Heading,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Text,
  NumberInput,
  HStack,
  NumberInputField,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInputStepper,
  Select,
  RadioGroup,
  Stack,
  Radio,
} from "@chakra-ui/react";

// import { PALETTE } from "../constants";
// import CardGrid from "../components/CardGrid";

// const COLUMNS = 3;
// var cards = Array.from({ length: COLUMNS }).map((_, i) => ({
//   number: i + 1,
//   color: PALETTE[i],
//   selected: false,
// }));

// function validateSelection(cards, selectedCardNumber) {
//   var maxNumber = Math.max(...cards.map(card => card.number));
//   console.log(`Max number: ${maxNumber}`);
//   return selectedCardNumber === maxNumber;
// }

export default function Builder() {
  const [value, setValue] = React.useState("2");

  return (
    <VStack spacing={6}>
      <Text>Game Builder</Text>
      <HStack>
        <RadioGroup onChange={setValue} value={value}>
          <Stack direction="row">
            <Radio value="2">2</Radio>
            <Radio value="3">3</Radio>
            <Radio value="4">4</Radio>
          </Stack>
        </RadioGroup>
      </HStack>
      <Button colorScheme="teal">Button</Button>
    </VStack>
  );
}
