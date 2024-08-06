import { useState } from "react";
import {
  SimpleGrid,
  Card,
  CardBody,
  Text,
  Container,
  CardHeader,
  Heading,
} from "@chakra-ui/react";

function NumberCard(props) {
  const [borderColor, setBorderColor] = useState("gray.200");
  const handleClick = () => {
    setBorderColor(borderColor === "gray.200" ? "blue.500" : "gray.200");
  };

  return (
    <Card
      maxW={"300px"}
      height={"300px"}
      borderColor={borderColor}
      borderWidth={"2px"}
      onClick={handleClick}
    >
      <CardHeader>
        <Heading size="md">{props.number}</Heading>
      </CardHeader>
      <CardBody>
        <Text>Insert d3 graphical representation of a number here.</Text>
      </CardBody>
    </Card>
  );
}

function CardGridCell(props) {
  return <Container centerContent>{props.children}</Container>;
}

export default function CardGrid(props) {
  return (
    <SimpleGrid columns={props.columns} spacing={10}>
      {Array.from({ length: props.columns }).map((_, i) => (
        <CardGridCell>
          <NumberCard number={i + 1} />
        </CardGridCell>
      ))}
    </SimpleGrid>
  );
}
