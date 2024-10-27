var data = [10];
var canvas = d3
  .select("body")
  .append("svg")
  .attr("width", 500)
  .attr("height", 500)
  .attr("style", "border: 1px solid");

var circle1 = canvas
  .append("circle")
  .attr("cx", 50)
  .attr("cy", 100)
  .attr("r", 25);

var circle2 = canvas
  .append("circle")
  .attr("cx", 50)
  .attr("cy", 200)
  .attr("r", 25);

var circles = canvas
  .selectAll("circle")
  .data(data)
  .attr("fill", "red")
  .enter()
  .attr("fill", "green");
