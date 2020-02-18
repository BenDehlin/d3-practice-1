import React from "react"
import BarChartClass from "./BarChartClass"
import BarChartFunctional from "./BarChartFunctional"

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <BarChartClass />
      <BarChartFunctional />
    </div>
  )
}

export default App
