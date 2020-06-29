 
import React, {Component} from "react"
import todosData from "./todosData"
import TodoItem from "./TodoItem"


class App extends Component{
    constructor(){
        super()
        this.state = {
           todos: todosData
        }
    }
    render(){
          const todoData = this.state.todos.map(item => <TodoItem key={item.id} todosData={item}
    />)
        return(
        <div className="todo-list">
         <h1>Icecreams</h1>
            {todoData}
        </div>
        )
    }
}

export default App