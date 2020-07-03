 
import React from "react"
import todosData from "./todosData"
import TodoItem from "./TodoItem"

function App() {
    const todoData = todosData.map(item => <TodoItem key={item.id} todosData={item}
    />)
    return (
        <div className="todo-list">
         <h1>Icecreams</h1>
            {todoData}
        </div>
    )
}

export default App