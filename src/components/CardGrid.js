import { useState, useRef, useEffect } from "react";
import {
  SimpleGrid,
  Card,
  CardBody,
  Text,
  Container,
  CardHeader,
  Heading,
  Flex,
  Center,
} from "@chakra-ui/react";
import * as d3 from "d3";

const SquareStack = ({
  size = 30,
  color = "blue",
  spacing = 5,
  number = 5,
}) => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const data = Array.from({ length: number }, (_, i) => i);
    const squares = svg.selectAll("rect").data(data);

    const totalHeight = (size + spacing) * number;

    squares
      .enter()
      .append("rect")
      .attr("x", 0)
      .attr("y", d => totalHeight - (d + 1) * (size + spacing))
      .attr("width", size)
      .attr("height", size)
      .attr("fill", color);
  }, [size, color, spacing, number]);

  return (
    <svg ref={svgRef} width={size} height={(size + spacing) * number}></svg>
  );
};

function NumberCard(props) {
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
        <Heading size="md">{props.number}</Heading>
      </CardHeader>
      <CardBody
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {/* <Text>Insert d3 graphical representation of a number here.</Text> */}
        {/* <Flex> */}
        <SquareStack number={props.number} />
        {/* </Flex> */}
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
