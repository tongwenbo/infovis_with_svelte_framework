<script>
  import * as d3 from "d3";
  export let data;
  console.log(d3);

  const width = 1800;
  const height = 800;
  const margin = {top:80, right:130, bottom:60, left:200};
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const x = d3.scaleLinear()
  .domain([0, d3.max(data, d => d.value)])
  .range([0, innerWidth]);

  const y = d3.scaleBand()
  .domain( data.map(d => d.roadtype) )
  .range([0, innerHeight])
  .padding(0.45);

</script>

<svg width={width} height={height} id="mainsvg" class="svgs">
  <!--add the title for this plot-->
  <text
    x={innerWidth/2-110}
    y="38"
    font-size="24px"
    font-weight="750"
  >
      The number of accidents with damage to people by road type
  </text>

  <g transform={`translate(${margin.left}, ${margin.top})`}>
    <!--add the name for y axis-->
    <text
      text-anchor="end"
      x={198-margin.left}
      y="0"
      font-size="18px"
      font-weight="750"
    >
      roadtype
    </text>

    <!--add the name for x axis-->
    <text
      text-anchor="end"
      x={innerWidth+110}
      y={innerHeight+14}
      font-size="18px"
      font-weight="750"
    >
      accidents
    </text>

    <line y1={innerHeight} y2={innerHeight} x2={innerWidth+15} stroke="black"></line>
    
    <!--add x axis-->
    {#each x.ticks() as tickValue}
      <g transform={`translate(${x(tickValue)},0)`}>
        <line y2={innerHeight} stroke="grey"></line>
        <text text-anchor="middle" dy=".71em" y={innerHeight+3}>
          {tickValue}
        </text>
      </g>
    {/each}

    <line y2={innerHeight} stroke="black"></line>
    
    {#each data as d}
      <!--add y axis-->
      <text
        text-anchor="end"
        x="-3"
        dy=".32em"
        y={y(d.roadtype) + y.bandwidth() / 2}
      >
          {d.roadtype}
      </text>
      <!--add bar-->
      <rect
        x="0"
        y={y(d.roadtype)}
        width={x(d.value)}
        height={y.bandwidth()}
        fill="darkgreen"
      />
    {/each}
  </g>
</svg>
