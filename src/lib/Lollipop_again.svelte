<script>
  // this is the second plot of lollipop, because it is placed in the end, so a JS-style coding is used
  import * as d3 from "d3";
  export let data;
  
  const width = 1400;
  const height = 900;
  const margin = {top:100, right:30, bottom:60, left:250};
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const header = "The number of people died per 1000 injury-involved accidents by cause of accident in 2019";

  // append the svg object and add a g element
  const svg = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);
  
  // add the title of this plot 
  svg.append("text")
    .attr("x", 30)
    .attr("y", -60)
    .attr("fill", "black")
    .text(header)
    .style('font-size', '24px')
    .style('font-weight', '750')

  // Add X axis
  const x = d3.scaleLinear()
    .domain([0, 3])
    .range([ 0, innerWidth]);
  svg.append("g")
    .attr("transform", `translate(0, ${innerHeight})`)
    .call(d3.axisBottom(x))
    .selectAll("text")                           // Add numbers for x axis 
      .style("text-anchor", "end")
      .style('font-size', '16px');

  // Add Y axis
  const y = d3.scaleBand()
    .range([ 0, innerHeight ])
    .domain(data.map(d=>d.cause))
    .padding(1);
  svg.append("g")
    .call(d3.axisLeft(y)).style('font-size', '14px').style('font-weight', '900')
    .call(g => g.append("text")                  // Add the name of Y axis
      .attr("x", -margin.left + 120)
      .attr("y", -10)
      .attr("fill", "darkblue")
      .attr("text-anchor", "start")
      .text("cause of accident")                       
      .style('font-size', '16px')
    );

  // Lines for Lollipop
  svg.selectAll("myline")
    .data(data)
    .enter()
    .append("line")
    .attr("x1", d=>x(d.value))
    .attr("x2", x(0))
    .attr("y1", d=>y(d.cause))
    .attr("y2", d=>y(d.cause))
    .attr("stroke", "grey")

  // Circles for Lollipop
  svg.selectAll("mycircle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", d=>x(d.value))
    .attr("cy", d=>y(d.cause))
    .attr("r", "4")
    .style("fill", "lightgreen")
    .attr("stroke", "black")

</script>