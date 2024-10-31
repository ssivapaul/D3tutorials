var canvas = d3
  .select("body")
  .append("svg")
  .attr("width", 1500)
  .attr("height", 1500)
  .attr("style", "border:1px solid");

var group = canvas.append("g").attr("transform", "translate(300, 300)");

var r = 300;
var data = [10, 50, 80];

var arc = d3.arc().innerRadius(0).outerRadius(r);

var pie = d3.pie().value(function (d) {
  return d;
});

var color = d3.scaleOrdinal().range(["red", "green", "blue"]);

var arcs = group
  .selectAll(".arc")
  .data(pie(data))
  .enter()
  .append("g")
  .attr("class", "arc");

arcs
  .append("path")
  .attr("d", arc)
  .attr("fill", (d) => color(d.data));

arcs
  .append("text")
  .attr("transform", (d) => "translate(" + arc.centroid(d) + ")")
  .text((d) => d.data)
  .attr("font-size", "2rem")
  .attr("text-anchor", "middle");
