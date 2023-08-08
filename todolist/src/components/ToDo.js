import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

const ToDo = ({ task, toggleComplete , deleteToDo  , editTodo}) => {
    return (
        <div className="Todo">
            <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed': ""}`}>{task.task}</p>
            <div className="icon-box">
                <FontAwesomeIcon icon={faPenSquare} onClick={() =>editTodo(task.id)}/>
                <FontAwesomeIcon icon={faTrash} onClick={() => deleteToDo(task.id)}/>
            </div>

        </div >
    )
}

export default ToDo