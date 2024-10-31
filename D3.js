var data = [
  { x: 10, y: 0 },
  { x: 10, y: 100 },
  { x: 100, y: 100 },
];

var canvas = d3
  .select("body")
  .append("svg")
  .attr("width", 500)
  .attr("height", 500)
  .attr("style", "border:1px solid");

var group = canvas.append("g").attr("transform", "translate(100, 100)");

var line = d3
  .line()
  .x(function (d) {
    return d.x;
  })
  .y(function (d) {
    return d.y;
  });

group
  .selectAll("path")
  .data([data])
  .enter()
  .append("path")
  .attr("d", line)
  .attr("fill", "none")
  .style("stroke", "#000")
  .attr("stroke-width", 10);
