import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const SiteTitle = "Number Sense";
const LinkNames = ["Sandbox", "About", "Game Loop", "Builder"];
const LinkPaths = ["/sandbox", "/about", "/game-loop", "/builder"];

const NavLink = props => {
  const { children, path } = props;
  return (
    <Box
      as={Link}
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      to={path}
    >
      {children}
    </Box>
  );
};

export default function Navbar(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Text sx={{ fontWeight: "bold" }} as={Link} to={"/"}>
              {SiteTitle}
            </Text>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {LinkNames.map((link, i) => (
                <NavLink key={link} path={LinkPaths[i]}>
                  {link}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          {/* <Flex alignItems={"center"}>
            <Button variant={"solid"} colorScheme={"teal"} size={"sm"} mr={4}>
              Play
            </Button>
          </Flex> */}
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {LinkNames.map(link => (
                <NavLink key={link} path={LinkPaths}>
                  {link}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      {props.children}
    </>
  );
}
