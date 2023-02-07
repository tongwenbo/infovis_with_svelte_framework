<div style="white-space:pre-line"/>
<script>
  import * as d3 from "d3";

  // these data are counted from the conditiondata and accidentcategory data
  const data = {innercity: 176948, "out of town": 65632, highway: 16407};
  const data1 = {innercity: 685, "out of town": 1498, highway: 314};
  const total = 258987;
  const total1 = 2499;
	
  const width = 850;
  const height = 600;
  const margin = 80;
  const radius = Math.min(width, height) / 2 - margin;
  const colors = ["silver", "black", "grey"];
  const header = "The percentage of out-of-town accidents among all accidents";
  const header1 = "The percentage of out-of-town-accident deaths among all deaths";

  // append the svg object and add a g element
  const svg = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", `translate(${width / 2}, ${height / 2})`);
    
  // add header for the first pie
  svg.append("text")
    .attr("x", -320)
    .attr("y", -250)
    .attr("fill", "black")
    .text(header)
    .style('font-size', '24px')
    .style('font-weight', '750')

  // create arc for this pie chart
  const color = d3.scaleOrdinal().range(colors);
  const pie = d3.pie().value( d => d[1] );
  const data_processed = pie(Object.entries(data))
  const data1_processed = pie(Object.entries(data1))
  const arcGenerator = d3.arc()
    .innerRadius(0)
    // @ts-ignore
    .outerRadius(radius)
  
  // add arcs in this pie
  svg.selectAll('mySlices')
    .data(data_processed)
    .join('path')
    .attr('d', arcGenerator)
    // @ts-ignore
    .attr('fill', d => color(d.data[0]))
    .attr("stroke", "white")
    .style("stroke-width", "2px")
    .style("opacity", 0.7)

  // add only out of town in the pie chart, because this is only what we focus on
  svg.selectAll('mySlices')
    .data(data_processed)
    .join('text')
    .text(function(d){if (d.data[0]=="out of town") return d.data[0]+" "+Number(100*d.data[1]/total).toFixed(0)+"%"})
    .style('font-weight', '750')
    .attr("fill", "white")
    .attr("transform", d=>`translate(${arcGenerator.centroid(d)})`)
    .style("text-anchor", "middle")
    .style("font-size", 17)
  
  // below is all the same for the second pie chart
  const svg1 = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", `translate(${width / 2}, ${height / 2})`);

  svg1.append("text")
    .attr("x", -350)
    .attr("y", -250)
    .attr("fill", "black")
    .text(header1)
    .style('font-size', '24px')
    .style('font-weight', '750')

  svg1.selectAll('mySlices')
    .data(data1_processed)
    .join('path')
    .attr('d', arcGenerator)
    // @ts-ignore
    .attr('fill', d => color(d.data[0]))
    .attr("stroke", "white")
    .style("stroke-width", "2px")
    .style("opacity", 0.7)

  svg1.selectAll('mySlices')
    .data(data1_processed)
    .join('text')
    .text(function(d){if (d.data[0]=="out of town") return d.data[0]+'\n'+Number(100*d.data[1]/total1).toFixed(0)+"%"})
    .style('font-weight', '750')
    .attr("fill", "white")
    .attr("transform", d=>`translate(${arcGenerator.centroid(d)})`)
    .style("text-anchor", "middle")
    .style("font-size", 17)
</script>
