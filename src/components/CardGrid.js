import {
  SimpleGrid,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Divider,
} from "@chakra-ui/react";

import SquareStack from "../d3/SquareStack";

function NumberCard({ number, color, selected, handleCardClick }) {
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
  selectedCardNumber,
  handleCardClick,
}) {
  return (
    <SimpleGrid columns={{ sm: 1, md: columns }} spacing={10}>
      {cards.map((c, _) => (
        <NumberCard
          key={c.number}
          id={c.number}
          number={c.number}
          color={c.color}
          selected={selectedCardNumber === c.number}
          handleCardClick={handleCardClick}
        />
      ))}
    </SimpleGrid>
  );
}
