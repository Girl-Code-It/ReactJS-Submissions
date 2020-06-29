import React from "react"
import ReactDOM from "react-dom"

function MyInfo(){
  return(
    <div>
    <h1>Megha Gupta</h1>
    <p>I am mentee at Gci and I love to do coding</p>
    <p>My dream destination that I would love to visit:</p>
    <ol>
    <li>Kashmir</li>
    <li>USA</li>
    <li>Spain</li>
    </ol>
    </div>
  )
}
// 3. Render an instance of that functional component to the browser
// Extra challenge: learn on your own (Google!) how you can add some style to your page.
// (We will also cover this in an upcoming lesson).
ReactDOM.render(<MyInfo/>,document.getElementById("root"))