import React, {useState, useEffect, useRef} from 'react'
import * as d3 from 'd3'

const App = () => {
  const temperatureData = [8, 5, 13, 9, 12]
  const temperatures = useRef('temperatures')
  d3.select(temperatures.current)
  .selectAll("h2")
  .data(temperatureData)
  .enter()
  .append('h2')
  .text('New Temperature')
  console.log(temperatures)
  return(
    <div ref={temperatures}>App</div>
  )
}

export default App