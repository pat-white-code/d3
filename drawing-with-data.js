let data = [1, 23, 50, 101, 125, 200, 103, 1, 23, 50, 101, 125, 200, 103]
let w = 500;
let h = 500;
let padding = 4;

const svg = 
d3.select('body')
  .append('svg')
  .attr('width', w)
  .attr('height', h)

svg.selectAll("rect")
  .data(data)
  .enter()
  .append('rect')
  .attr('y', (d) => h - d * 2)
  .attr('x', (d, i)=> i * (w / data.length))
  .attr('width', w / data.length - padding)
  .attr('height', (d) => d * 2)
  // .attr('height', (d, i)=> d[i])