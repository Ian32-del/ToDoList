import React, {useState} from "react";

const EditToDoForm = ({EditTodo , task}) => {
    const[value , setValue] = useState("")

    const handleSubmit = event => {
        event.preventDefault();

        EditTodo(value , task.id);
        setValue("")
    }
    return(
        <form className="ToDoForm" onSubmit={handleSubmit}>
            <input type="text" className="todo-input" value = {value} 
            placeholder="Update Task" 
            onChange={(event) => setValue(event.target.value)}/>
            <button type="submit" className="todo-btn">Update Task</button>
        </form>
    )
}

export default EditToDoForm