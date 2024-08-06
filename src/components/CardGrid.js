import {
  Box,
  SimpleGrid,
  Card,
  CardBody,
  Text,
  Flex,
  Center,
  Container,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";

function NumberCard(props) {
  return (
    <Card maxW={"300px"} height={"300px"}>
      <CardBody>
        <Text>Insert d3 graphical representation of a number here.</Text>
      </CardBody>
    </Card>
  );
}

function CardGridCell(props) {
  return (
    <Container bg="lightgray" centerContent>
      {props.children}
    </Container>
  );
}

export default function CardGrid(props) {
  return (
    <SimpleGrid columns={props.columns} spacing={10}>
      {Array.from({ length: props.columns }).map((_, i) => (
        <CardGridCell>
          <NumberCard />
        </CardGridCell>
      ))}
    </SimpleGrid>
  );
}
