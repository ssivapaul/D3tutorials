var dataArray = [20, 40, 50, 60];
var w = 500;
var h = 500;

var barScale = d3.scaleLinear().domain([0, 60]).range([0, w]);
var color = d3.scaleLinear().domain([0, 60]).range(["red", "blue"]);
var axis = d3.axisBottom(barScale);

var canvas = d3
  .select("body")
  .append("svg")
  .attr("style", "border: 2px solid")
  .attr("width", w)
  .attr("height", h)
  .append("g")
  .attr("transform", "translate(20, 0)")
  .call(axis);

var bars = canvas
  .selectAll("rect")
  .data(dataArray)
  .enter()
  .append("rect")
  .attr("fill", (d) => color(d))
  .attr("width", (d) => barScale(d))
  .attr("height", 50)
  .attr("y", (d, i) => i * 100);
