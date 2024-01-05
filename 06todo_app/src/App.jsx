import { useEffect, useState } from "react"
import './App.css'
import {Todo, TodoForm} from './components'
import { TodosProvider } from "./contexts/TodosContext";

function App() {

  const [todoList, setTodoList] = useState([]);
  
  const handleSubmit = (todo) => {
    setTodoList((prev) => [...prev, todo]);
  }

  const handleCompleted = (id) => {
    setTodoList((prev) => prev.map((obj) => (obj.id === id ? {...obj, isChecked : !obj.isChecked} : obj)))
  }

  const handleDelete = (id) => {
    setTodoList((prev) => prev.filter((obj) => obj.id !== id));
  }

  const handleEdit = (id, task) => {
    setTodoList((prev) => prev.map((obj) => (obj.id === id ? {...obj, task} : obj)))
  }

  const handleReset = () => {
    setTodoList([]);
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(!todos) return
    else {
      setTodoList(todos);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList))
  }, [todoList])

  return (
    <TodosProvider value={{ handleSubmit, handleCompleted, handleEdit, handleDelete }}>
      <div className="d-flex flex-column align-items-center w-50 mx-auto my-5 bg-dark rounded-4 p-3">
        <h1 className="text-warning text-center">ToDo App</h1>
        
        <TodoForm />

        <div className="d-flex flex-column p-2 my-2 w-100 rounded-4">
          {
            todoList.map((todo) => (
              <Todo key={todo.id} todo={todo}/>
            ))          
          }  
        </div>

        {todoList.length !== 0 && <button onClick={handleReset} className="btn btn-primary btn-md rounded-pill shadow-sm">Reset list</button>}

      </div>
    </TodosProvider>
    
  )
}

export default App
