// let w = 200;
// let h = 500;

// const monthlySales = [
//   {month: 10, sales: 104},
//   {month: 20, sales: 312},
//   {month: 30, sales: 124},
//   {month: 40, sales: 205},
//   {month: 50, sales: 300},
//   {month: 60, sales: 315},
//   {month: 70, sales: 267},
//   {month: 80, sales: 123},
//   {month: 90, sales: 50},
//   {month: 100, sales: 107}
// ]

// const lineFunc = d3.line()
//   .x(d => d.month * 2)
//   .y(d => d.sales)
//   .context('linear');

// const svg = d3.select('body').append('svg').attr('width', w).attr('height', h);

// const viz = svg.append('path')
//   .attr('d', lineFunc(monthlySales))
//   .attr('stroke', 'purple')
//   .attr('stroke-width', 2)
//   .attr('fill', 'none')

let svg = d3.select('body').append('svg')
            .attr('width', 400)
            .attr('height', 400)
            .style('background-color', 'black');

  svg.append('line')
      .style("stroke", "lightgreen")
      .style("stroke-width", 10)
      .attr("x1", 0)
      .attr("y1", 0)
      .attr("x2", 200)
      .attr("y2", 200); 