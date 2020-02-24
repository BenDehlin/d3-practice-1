import React, { useEffect, useRef } from "react"
import * as d3 from "d3"

const BarChartFunctional = props => {
  const canvas = useRef("canvas")
  useEffect(() => {
    const data = [2, 4, 2, 6, 8]
    drawBarChart(data)
  }, [])

  const drawBarChart = data => {
    //draw blank svg
    const canvasHeight = 400
    const canvasWidth = 600
    const scale = 20
    const barWidth = 40
    const svgCanvas = d3
      .select(canvas.current)
      .append("svg")
      .attr("width", canvasWidth)
      .attr("height", canvasHeight)
      .style("border", "1px solid black")

    //draw bars
    svgCanvas
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("width", barWidth)
      .attr("height", datapoint => datapoint * 20)
      .attr("fill", "orange")
      .attr('x', (datapoint, iteration) => iteration * (barWidth + 5))
      .attr('y', (datapoint) => canvasHeight - datapoint * scale)

    svgCanvas
    .selectAll('text')
    .data(data)
    .enter()
    .append('text')
    .attr('x', (datapoint, iteration) => iteration * (barWidth + 5) + 10)
    .attr('y', (datapoint, iteration) => canvasHeight - datapoint * scale - 10)
    .text(datapoint => datapoint)
  }

  return <div ref={canvas}></div>
}

export default BarChartFunctional
