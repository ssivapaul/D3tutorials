var dataArray = [20, 40, 50, 60];
var w = 500;
var h = 500;

var canvas = d3
  .select("body")
  .append("svg")
  .attr("width", w)
  .attr("height", h)
  .append("g");
var barScale = d3.scaleLinear().domain([0, 60]).range([0, w]);
var color = d3.scaleLinear().domain([0, 60]).range(["red", "blue"]);

var bars = canvas
  .selectAll("rect")
  .data(dataArray)
  .enter()
  .append("rect")
  .attr("fill", (d) => color(d))
  .attr("width", (d) => barScale(d))
  .attr("height", 50)
  .attr("y", (d, i) => i * 100);
