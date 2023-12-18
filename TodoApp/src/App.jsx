import { useState } from "react"
import './App.css'
import Todo from './Todo'

function App() {

  // const Todos = [
  //   {
  //     id: 0,
  //     task: "Learn React",
  //     isChecked: true
  //   },
  //   {
  //     id: 1,
  //     task: "Meditate",
  //     isChecked: false
  //   },
  //   {
  //     id: 2,
  //     task: "Gym",
  //     isChecked: false
  //   }
  // ]

  const [todoList, setTodoList] = useState([]);
  const [inp, setInp] = useState("");

  const handleInputChange = (e) => {
    setInp(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(inp != "") {
      const id = Math.random();
      const task = inp;
      const isChecked = false;
      const newTodo = {id, task, isChecked};
      setInp("");
      const newTodoList = [...todoList, newTodo];
      setTodoList(newTodoList);
    }
   
  }

  const handleReset = () => {
    setTodoList([]);
  }

  return (
    <div className="d-flex flex-column align-items-center w-50 mx-auto my-5 bg-dark rounded-4 p-3">
      <h1 className="text-warning text-center">ToDo App</h1>
      <form onSubmit={handleSubmit} className="w-100 d-flex justify-content-center gap-2 my-3">
        <input onChange={handleInputChange} type="text" id="newTask" placeholder="Add todo..." value={inp} className="taskInp rounded-pill shadow-none outline-none w-50 p-2 fw-bold fs-6 text-center"/>
        <button type="submit" className="btn btn-primary btn-md rounded-pill">Add to list</button>
      </form>
 
      <div className="d-flex flex-column p-2 my-2 w-100 rounded-4">
        {
          todoList.map((todo) => {
            return(
              <Todo key={todo.id} todoList={todoList} setTodoList={setTodoList} todo={todo}/>
            )
          })
        }  
      </div>

      {todoList.length !== 0 && <button onClick={handleReset} className="btn btn-primary btn-md border border-1 rounded-pill shadow-sm">Reset list</button>}

    </div>
  )
}

export default App
