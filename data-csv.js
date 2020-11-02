// import { max, scaleLinear } from 'd3';

const svg = d3.select('svg')
const h = +svg.attr('height')
const w = +svg.attr('width')

console.log(h, w)

const render = data => {
  const xVal = d => d.population
  const yVal = d => d.country
  const margin = {top: 30, right: 30, bottom: 30, left: 30}
  const innerWidth = w - margin.left - margin.right;
  const innerHeight = h - margin.top - margin.bottom;


  const xScale = d3.scaleLinear()
    .domain([0, d3.max(data, xVal)])
    .range([0, innerWidth])

    const yScale = d3.scaleBand()
    .domain(data.map(yVal))
    .range([0, innerHeight]);

    const yAxis = d3.axisLeft(yScale)

  // console.log('XSCALE', xScale.domain());
  // console.log('XSCALE', xScale.range());

  // console.log('Y DOMAIN', yScale.domain());
  // console.log('Y RANGE', yScale.range());

  const g = svg.append('g')
    .attr('transform', `translate(${margin.left}, ${margin.right})`)

  yAxis(g.append('g'));

  g.selectAll('rect').data(data)
    .enter().append('rect')
      .attr('y', data => yScale(data.country))
      .attr('height', yScale.bandwidth())
      // .attr('height', 300)
      .attr('width', d => xScale(xVal(d)))
}

d3.csv('data.csv').then(data => {
  data.forEach(d => d.population = +d.population * 1000)
  console.log(data)
  render(data)
})