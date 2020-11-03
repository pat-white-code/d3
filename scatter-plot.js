// import { max, scaleLinear } from 'd3';

const svg = d3.select('svg')
const h = +svg.attr('height')
const w = +svg.attr('width')

console.log(h, w)

const render = data => {
  const xVal = d => d.population
  const yVal = d => d.country
  const margin = {top: 100, right: 50, bottom: 80, left: 160}
  const innerWidth = w - margin.left - margin.right;
  const innerHeight = h - margin.top - margin.bottom;


  const xScale = d3.scaleLinear()
    .domain([0, d3.max(data, xVal)])
    .range([0, innerWidth])

    const yScale = d3.scalePoint()
    .domain(data.map(yVal))
    .range([0, innerHeight])
    .padding(0.2);

  const g = svg.append('g')
    .attr('transform', `translate(${margin.left}, ${margin.right})`)

  const xAxisTickFormat = number => 
    d3.format('.3s')(number).replace('G', 'B')

  const xAxis = d3.axisBottom(xScale)
    .tickFormat(xAxisTickFormat)
    .tickSize(-innerHeight);

  g.append('g').call(d3.axisLeft(yScale))
    .selectAll('.domain, .tick line').remove()
  
  const xAxisG = g.append('g').call(xAxis)
  .attr('transform', `translate(0, ${innerHeight})`)
  .attr('class', 'x-axis-lab');
  
  xAxisG.select('.domain').remove();

  xAxisG.append('text').text('Total Population').attr('fill', 'black').attr('y', 60).attr('x', innerWidth / 2).attr('class', 'axis-label')

  g.selectAll('circle').data(data)
    .enter().append('circle')
      .attr('cy', d => yScale(d.country))
      .attr('cx', d => xScale(xVal(d)))
      .attr('r', 10)
      .attr('fill', 'black')
      // .attr('height', 300)
  
  g.append('text')
    .text('10 Most Populous Countries')
    .attr('class', 'chart-title')
}

d3.csv('data.csv').then(data => {
  data.forEach(d => d.population = +d.population * 1000)
  console.log(data)
  render(data)
})