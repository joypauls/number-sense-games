import {
  Box,
  SimpleGrid,
  Card,
  CardBody,
  Text,
  Flex,
  Center,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";

export default function CardGrid(props) {
  return (
    <SimpleGrid columns={2} spacing={10}>
      <Box bg="lightgray">
        <Flex justifyContent={"center"}>
          <Card maxW={"200px"}>
            <CardBody>
              <Text>
                View a summary of all your customers over the last month.
              </Text>
            </CardBody>
          </Card>
        </Flex>
      </Box>
      <Box bg="lightgray"></Box>
    </SimpleGrid>
  );
}
