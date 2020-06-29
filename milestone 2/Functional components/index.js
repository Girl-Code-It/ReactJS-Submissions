import React from "react"
import ReactDOM from "react-dom"

//JSX
function MyPlaces(){
  return(
    <div><h1>Best places in India</h1><ul>
    <li>Kashmir</li>
    <li>Manali</li>
    <li>Shimla</li>
    </ul></div>
  )
}
ReactDOM.render(<MyPlaces/>,
              document.getElementById("root"))
