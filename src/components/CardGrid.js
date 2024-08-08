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

function NumberCard({ number, color }) {
  const [borderColor, setBorderColor] = useState("gray.200");
  const handleClick = () => {
    setBorderColor(borderColor === "gray.200" ? "blue.300" : "gray.200");
  };

  return (
    <Card
      width={"200px"}
      height={"300px"}
      borderColor={borderColor}
      borderWidth={"2px"}
      onClick={handleClick}
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

function CardGridCell({ children }) {
  return <Container centerContent>{children}</Container>;
}

export default function CardGrid({ columns, cards }) {
  return (
    <SimpleGrid columns={columns} spacing={10}>
      {cards.map((c, _) => (
        <CardGridCell>
          <NumberCard number={c.number} color={c.color} />
        </CardGridCell>
      ))}
    </SimpleGrid>
  );
}
