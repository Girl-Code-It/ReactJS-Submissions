/**
 * Challenge: Style the completed todo items differently from the incomplete items.
 */

import React from "react"

function TodoItem(props) {
    const itemCompleted = {
        fontStyle: "italic",
        fontWeight: "1000",
        color: "purple",
    }
    return (
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.item.completed} 
                onChange={() => props.handleChange(props.item.id)}
            />
            <p style={props.item.completed ? itemCompleted : null}>{props.item.text}</p>
        </div>
    )
}

export default TodoItem