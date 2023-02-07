<script>
  import * as d3 from "d3";
  export let data;

  const width = 1500;
  const height = 900;
  const margin = {top:100, right:65, bottom:60, left:250};
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const header = "The number of people died per 100 injury-involved accidents by cause of accident in 2019";
  
  const x = d3.scaleLinear()
  .domain([0, 3])
  .range([0, innerWidth])

  const y = d3.scaleBand()
  .domain(data.map(d=>d.cause))
  .range([0, innerHeight])
  .padding(1)

</script>

<svg width={width} height={height}>
  <g transform={`translate(${margin.left}, ${margin.top})`}>
    <!--add the title for this plot-->
    <text
      x="30"
      y="-60"
      font-size="24px"
      font-weight="750"
      fill="black"
    >
      {header}
    </text>
    
    <!--add the name of y axis-->
    <text
      text-anchor="start"
      x={98-margin.left}
      y="10"
      font-size="18px"
      font-weight="750"
    >
      cause of accident
    </text>

    <!--add the name of x axis-->
    <text
      text-anchor="end"
      x={innerWidth+63}
      y={innerHeight+14}
      font-size="18px"
      font-weight="750"
    >
      kills
    </text>

    <line y1={innerHeight} y2={innerHeight} x2={innerWidth+25} stroke="black"></line>
    
    <!--add x axis-->
    {#each x.ticks() as tickValue}
      <g transform={`translate(${x(tickValue)},0)`}>
        <line y1="35" y2={innerHeight} stroke="lightgrey"></line>
        <text text-anchor="middle" dy=".71em" y={innerHeight+3}>
          {tickValue}
        </text>
      </g>
    {/each}

    <line y1="15" y2={innerHeight} stroke="black"></line>

    {#each data as d}
      <!--add names for y axis-->
      <text
        text-anchor="end"
        x={-margin.left + 244}
        y={y(d.cause) + y.bandwidth()/2}
        dy=".32em"
        font-size="16px"
      >
        {d.cause}
      </text>
      
      <!--add lines-->
      <line
        x1={x(d.value)}
        x2={x(0)}
        y1={y(d.cause)}
        y2={y(d.cause)}
        stroke="grey"
      />

      <!--add circle-->
      <circle
        cx={x(d.value)}
        cy={y(d.cause)}
        r="4"
        stroke="black"
        fill="lightgreen"
      />
    {/each}
  </g>
</svg>
