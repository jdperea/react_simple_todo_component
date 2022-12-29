import { useState } from "react";
import Todo from "./todo";
import './todoApp.css'

export default function TodoApp() {
    const [title, setTitle] = useState("")
    const [todos, setTodos] = useState([])
    
    function handleChange(e) {
        const value = e.target.value
        setTitle(value)
    }

    function handleSubmit(e) {
        const newTodo = {
            id: crypto.randomUUID(),
            title: title,
            completed: false
        }
        const dataTodos = todos
        
        dataTodos.unshift(newTodo)
        
        setTodos(dataTodos)
        setTitle("")
        
        e.preventDefault()
    }

    function handleUpdate(id, value){// https://youtu.be/oT-feDPuJmk?t=2591
        const dataTodos = todos
        const item = dataTodos.find(item => item.id === id)
        item.title = value

        setTodos(dataTodos)
    }
    function handleDelete(id){
        const dataTodos = todos.filter(item => item.id !== id)
        setTodos(dataTodos)
    }

    return (<div className="todoContainer">
        <form className="todoCreateForm" onSubmit={handleSubmit}>
            <input className="todoInput" onChange={handleChange} value={title}/>
            <input type="submit" value="Create todo" onClick={handleSubmit} className="buttonCreate" />
        </form>
        <div className="todosContainer">
            {console.log(todos)}
            {todos.map(item => (
                   <Todo key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete} />
                ))}
        </div>
    </div>
    );
}