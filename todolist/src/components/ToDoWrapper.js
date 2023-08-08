import React, {useState} from "react";
import ToDoForm from "./ToDoForm";
import { v4 as uuidv4 } from 'uuid'
import ToDo from "./ToDo";
import EditToDoForm from "./EditToDo";
uuidv4();

const ToDoWrapper = () => {
    const[todos , setTodos] = useState([])

    const addTodo = todo => {
        setTodos([...todos , {id : uuidv4(), task : todo, 
        completed: false , isEditing: false }])
        console.log(todos)
    }

    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? 
            {...todo , completed : !todo.completed}: todo))
    }
    const deleteToDo = id => {
        setTodos(todos.filter (todo => todo.id !== id))
    }
    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? 
            {...todo , isEditing : !todo.isEditing }: todo))
    }



    return(
        <div className="ToDoWrapper">
            <h1>Get Things Done</h1>
            <ToDoForm addTodo={addTodo}/>
            {todos.map((todo, index) => (
                todo.isEditing ? (
                    <EditTodoForm/>
                ) : (
                    <ToDo task={todo} key={index}
                toggleComplete={toggleComplete}
                deleteToDo={deleteToDo}
                editTodo={editTodo}/>

                )
                
                
            ))}
        </div>
    )
}

export default ToDoWrapper