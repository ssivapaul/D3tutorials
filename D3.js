var data = [10, 20, 30, 40, 50];
d3.json("mydata.json").then((data) => {
  var canvas = d3
    .select("body")
    .append("svg")
    .attr("width", 500)
    .attr("height", 500);

  canvas
    .selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("width", function (d) {
      return d.age * 5;
    })
    .attr("height", 20)
    .attr("y", function (d, i) {
      return i * 25;
    })
    .attr("fill", "blue");
});
