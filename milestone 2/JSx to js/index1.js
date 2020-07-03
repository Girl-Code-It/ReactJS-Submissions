import React from "react"

function App() {
     const human = 20
     let person
  
  if (human < 18) {
    person = "student"
  } else if (human >= 18 && human < 40) {
    person = "adult"
  } else {
    person = "old age"
  }
  
  return (
    <h1>Person is {person}.</h1>
  )
}

export default App