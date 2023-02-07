<script>
  import * as d3 from "d3";
  export let data
  console.log(d3);

  // prepare the parameters
  const conditions = ["innercity", "out of town", "highway"];
  const width = 1900;
  const height = 900;
  const margin = {top: 70, right: 20, bottom: 5, left: 40};
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const xRange = [margin.left, innerWidth];
  const yRange = [innerHeight, margin.top];
  const colors = ["silver", "black", "grey"];
  const xLabel = "state";
  const yLabel = "↑ kills";
  const header = "The number of people killed in an accident in innercity/out of town/highway in all states without city-state";

  // compute the domains
  const X = d3.map(data, d => d.state);
  const Y = d3.map(data, d => d.value);
  const Z = d3.map(data, d => d.condition);
  const yDomain = [0, d3.max(Y)];
	const xDomain = X;
	const zDomain = Z;

  const xScale = d3.scaleBand(xDomain, xRange).padding(0.065);                     // the x axis is the states
  const xzScale = d3.scaleBand(zDomain, [0, xScale.bandwidth()]).padding(0.1);     // the xz axis is where the conditions relate to states, each state has 3 conditions
  const yScale = d3.scaleLinear(yDomain, yRange);                                  // the y axis is the number of deaths
  const zScale = d3.scaleOrdinal(zDomain, colors);                                 // the z axis is basically the color representations
  const xAxis = d3.axisBottom(xScale);
  const yAxis = d3.axisLeft(yScale);
  
  // append the svg object
  const svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [0, 0, width, height])
    .attr("style", "max-width: 100%; height: auto; height: intrinsic;");

  // add the title of this plot
  svg.append("text")
    .attr("x", 400)
    .attr("y", 45)
    .attr("fill", "black")
    .text(header)
    .style('font-size', '24px')
    .style('font-weight', '750');
  
  // add y Axis
  svg.append("g")
    .attr("transform", `translate(${margin.left},0)`)
    .call(yAxis).style('font-size', '12px').style('font-weight', '900')
    .call(g => g.selectAll(".tick line")
      .attr("x2", innerWidth)             // set (x1,y1), (x2,y2)
      .attr("stroke-opacity", 0.3)
    )
    .call(g => g.append("text")
      .attr("x", -margin.left + 5)
      .attr("y", 65)
      .attr("fill", "darkblue")
      .attr("text-anchor", "start")
      .text(yLabel)                        // display the name of y-Axis
      .style('font-size', '16px')
    );
      
  svg.append("g")
    .selectAll("rect")                     // create empty element rect and feed it with data
    .data(d3.range(X.length))              // here just need to tell d3 how many rectangles you want
    .join("rect")
      .attr("x", i => xScale(X[i]) + xzScale(Z[i]))  // x: how many states; xz: each state has 3 bars
      .attr("y", i => yScale(Y[i]))        // stick the x Axis at the bottom rather than the top
      .attr("width", xzScale.bandwidth())
      .attr("height", i => yScale(0) - yScale(Y[i]))
      .attr("fill", i => zScale(Z[i]));     // fill it with color scheme
			
  // add x Axis
  svg.append("g")                          
    .attr("transform", `translate(0,${innerHeight})`)
    .call(xAxis).selectAll("text")
      .attr("transform", "translate(0,10)rotate(-10)")  // to have more room for lang names
      .style('font-size', '14px')
      .style('font-weight', '900')
    .call(g => g.append("text")
      .attr("x", innerWidth + 15)
      .attr("y", 20)
      .attr("fill", "darkblue")
      .attr("text-anchor", "start")
      .text(xLabel)                        // display the name of x-Axis
      .style('font-size', '16px')
    );                     


  // below are Legend parts
  const legendScale = d3.scaleBand().domain(zDomain).range([10, 320]);

  // add 3 bars and link them to the color scheme and conditions
  svg.append("g")
    .attr("transform", `translate(1200, 200)`)
    .selectAll("rect")
    .data(Z)
    .join("rect")
    .attr("x", legendScale)
    .attr("y", 13)
    .attr("width", legendScale.bandwidth())
    .attr("height", 20)
    .attr("fill", zScale);
  
  // add name for each bar
  svg.append("g")
    .attr("transform", `translate(1200, 228)`)
    .call(d3.axisBottom(legendScale)
      .tickSize(11)
      // @ts-ignore
      .tickValues(conditions)).style('font-size', '16px').style('font-weight', '900')
    .call(g => g.select(".domain").remove())
    .call(g => g.append("text")
      .attr("x", 116)
      .attr("y", -30)
      .attr("fill", "currentColor")
      .attr("text-anchor", "start")
      .attr("font-weight", "bold")
      .attr("class", "title")
      .text("type of area"));
</script>
