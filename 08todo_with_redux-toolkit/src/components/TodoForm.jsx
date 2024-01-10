import React, {useState} from 'react';
import { addTodo } from '../features/todos/todosSlice';
import { useDispatch } from 'react-redux';

function TodoForm() {

  const [inp, setInp] = useState("");
  const dispatch = useDispatch();

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(addTodo(inp));
    setInp("");
  }


  return (
    <form onSubmit={handleAdd} className="w-100 d-flex justify-content-center gap-2 my-3">
        <input onChange={(e)=>setInp(e.target.value)} type="text" id="newTask" placeholder="Add todo..." value={inp} className="taskInp rounded-5 border-none shadow-none outline-none w-75 p-2 fw-bold text-center"/>
        <button type="submit" className="btn btn-primary btn-sm rounded-pill">Add to list</button>
    </form>
  )
}

export default TodoForm;