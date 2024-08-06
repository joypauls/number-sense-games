import { useState, useRef, useEffect } from "react";
import * as d3 from "d3";

export default function SquareStack({
  number = 5,
  color = "blue",
  size = 30,
  spacing = 5,
}) {
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
}
