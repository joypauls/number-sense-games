import { useState } from "react";
import {
  SimpleGrid,
  Card,
  CardBody,
  Container,
  CardHeader,
  Heading,
  Divider,
} from "@chakra-ui/react";

import SquareStack from "../d3/SquareStack";

function NumberCard({ number, color, handleCardClick, selected }) {
  return (
    <Card
      width={"200px"}
      height={"300px"}
      borderColor={selected ? "blue.300" : "gray.200"}
      borderWidth={"2px"}
      onClick={() => handleCardClick(number)}
      cursor={"pointer"}
    >
      <CardHeader>
        <Heading size="md">{number}</Heading>
      </CardHeader>
      <Divider borderBottomWidth={"1px"} />
      <CardBody
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {/* <Text>Insert d3 graphical representation of a number here.</Text> */}
        {/* <Flex> */}
        <SquareStack number={number} color={color} />
        {/* </Flex> */}
      </CardBody>
    </Card>
  );
}

export default function CardGrid({
  columns,
  cards,
  handleCardClick,
  selectedCardNumber,
}) {
  return (
    <SimpleGrid columns={columns} spacing={10}>
      {cards.map((c, _) => (
        <NumberCard
          key={c.number}
          id={c.number}
          number={c.number}
          color={c.color}
          handleCardClick={handleCardClick}
          selected={selectedCardNumber === c.number}
        />
      ))}
    </SimpleGrid>
  );
}
