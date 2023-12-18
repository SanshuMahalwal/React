import { useEffect, useState } from 'react'
import { ArrowRight, Trash } from 'react-bootstrap-icons';
import './Todo.css'

function Todo({ todoList, setTodoList, todo }) {

  const [complete, setComplete] = useState(todo.isChecked);

  const handleChange = () => {
    const id = todo.id;
    let myTask = todoList.find(obj => obj.id === id);
    myTask.isChecked = !myTask.isChecked;
    setTodoList(todoList.map((obj)=>obj.id === id ? myTask : obj));
    setComplete(prevState=>!prevState);
  }

  const handleDelete = () => {
    const id = todo.id;
    setTodoList(todoList.filter(obj => obj.id !== id));
  }

  useEffect(()=>{console.log("Your todos", todoList)}, [complete]);

  return (
    <div className="d-flex justify-content-center w-100 p-2 ">
      <div className="d-flex justify-content-center align-items-center w-75">
          <ArrowRight color="yellow" className="arrow me-2"/>
          <div className={`w-75 border border-1 rounded-4 p-1 ${complete ? 'bg-success' : 'bg-warning'} text-center fs-4 fw-bold`}>{todo.task}</div>
      </div>
      <div className="d-flex align-items-center gap-3">
        <input className='checkbox' onChange={handleChange} type="checkbox" defaultChecked={complete} />
        <Trash onClick={handleDelete} color="yellow" className='trash'/>
      </div>
    </div>
  )
}

export default Todo