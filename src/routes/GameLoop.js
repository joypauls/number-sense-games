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
} from "@chakra-ui/react";
import { ArrowForwardIcon, RepeatIcon } from "@chakra-ui/icons";

import { PALETTE } from "../constants";
import CardGrid from "../components/CardGrid";

const COLUMNS = 3;
var cards = Array.from({ length: COLUMNS }).map((_, i) => ({
  number: i + 1,
  color: PALETTE[i],
  selected: false,
}));

function validateSelection(cards, selectedCardNumber) {
  var maxNumber = Math.max(...cards.map(card => card.number));
  console.log(`Max number: ${maxNumber}`);
  return selectedCardNumber === maxNumber;
}

export default function GameLoop() {
  const [selectedCardNumber, setSelectedCardNumber] = useState(null);
  const [correctSelection, setCorrectSelection] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleCardClick = number => {
    setSelectedCardNumber(number);
    if (selectedCardNumber === number) {
      console.log(`Deselected card: ${number}`);
      setSelectedCardNumber(null);
      setCorrectSelection(false);
    } else {
      if (validateSelection(cards, number)) {
        setCorrectSelection(true);
      } else {
        setCorrectSelection(false);
      }
      console.log(`Selected card: ${number}`);
    }
  };

  const handleTryAgainClick = () => {
    setSelectedCardNumber(null);
    onClose();
  };

  const handleContinueClick = () => {
    setSelectedCardNumber(null);
    onClose();
  };

  return (
    <>
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
        <Button colorScheme="teal" size="lg" onClick={onOpen}>
          Validate
        </Button>
      </VStack>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Validation</ModalHeader>
          {/* <ModalCloseButton /> */}
          <ModalBody>
            <Text>selected card: {selectedCardNumber}</Text>
            <Text>correct selection: {correctSelection.toString()}</Text>
          </ModalBody>
          <ModalFooter>
            {correctSelection ? (
              <Button colorScheme="teal" mr={3} onClick={handleContinueClick}>
                Continue <ArrowForwardIcon ml={2} />
              </Button>
            ) : (
              <Button variant="outline" mr={3} onClick={handleTryAgainClick}>
                Try Again! <RepeatIcon ml={2} />
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
