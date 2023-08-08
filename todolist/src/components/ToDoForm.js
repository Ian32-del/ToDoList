import React, {useState} from "react";

const ToDoForm = ({addTodo}) => {
    const[value , setValue] = useState("")

    const handleSubmit = event => {
        event.preventDefault();

        addTodo(value);
        setValue("")
    }
    return(
        <form className="ToDoForm" onSubmit={handleSubmit}>
            <input type="text" className="todo-input" value = {value} 
            placeholder="What for Today" 
            onChange={(event) => setValue(event.target.value)}/>
            <button type="submit" className="todo-btn">Add Task</button>
        </form>
    )
}

export default ToDoForm