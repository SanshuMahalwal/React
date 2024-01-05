import React, {useState} from 'react'
import { useTodos } from '../../contexts/TodosContext';

function TodoForm() {

  const [inp, setInp] = useState("");
  const {handleSubmit} = useTodos();

  const addTodo = (e) => {
    e.preventDefault();
    if(inp != "") {
      const id = Date.now();
      const task = inp;
      const isChecked = false;
      const newTodo = {id, task, isChecked};
      setInp("");
      handleSubmit(newTodo);
    }

  }

  return (
    <form onSubmit={addTodo} className="w-100 d-flex justify-content-center gap-2 my-3">
        <input onChange={(e)=>setInp(e.target.value)} type="text" id="newTask" placeholder="Add todo..." value={inp} className="taskInp rounded-5 border-none shadow-none outline-none w-75 p-2 fw-bold text-center"/>
        <button type="submit" className="btn btn-primary rounded-pill">Add to list</button>
    </form>
  )
}

export default TodoForm