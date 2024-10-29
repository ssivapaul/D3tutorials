var data = [10, 20, 30, 40, 50];
d3.json("mydata.json").then((data) => {
  var canvas = d3
    .select("body")
    .append("svg")
    .attr("width", 500)
    .attr("height", 500)
    .attr("style", "border:1px solid");

  canvas
    .selectAll("rect")
    .attr("position", "absolute")
    .data(data)
    .enter()
    .append("rect")
    .attr("width", function (d) {
      return d.age * 5;
    })
    .attr("height", 30)
    .attr("y", function (d, i) {
      return i * 50;
    })
    .attr("fill", "blue");

  canvas
    .selectAll("text")
    .attr("position", "relative")
    .data(data)
    .enter()
    .append("text")
    .attr("fill", "white")
    .attr("y", function (d, i) {
      return i * 50 + 20;
    })
    .text(function (d) {
      return d.name;
    });
});
