import { useEffect, useRef, useState } from 'react'
import { Trash, PencilFill, Save2 } from 'react-bootstrap-icons';
import './Todo.css'
import { useTodos } from '../../contexts/TodosContext';

function Todo({ todo }) {
  const [isEditable, setIsEditable] = useState(false);
  const [task, setTask] = useState(todo.task);
  const inpRef = useRef();

  const {handleCompleted, handleEdit, handleDelete} = useTodos();

  const completeHandler = () => {
    handleCompleted(todo.id);
  }

  const deleteHandler = () => {
    handleDelete(todo.id)
  }

  const editBtnHandler = () => {
    inpRef.current.focus();
    setIsEditable(true);
  }

  const handleSave = () => {
    handleEdit(todo.id, task);
    setIsEditable(false);
  }

  

  return (
    <div className="d-flex justify-content-center align-items-center gap-3 w-100 my-2 ">
        <input className='checkbox' onChange={completeHandler} type="checkbox" checked={todo.isChecked} />

        <input ref={inpRef} onChange={(e)=>setTask(e.target.value)} type="text" className={`todo w-50 rounded-4 border-none shadow-none outline-none  ${todo.isChecked ? 'bg-success' : 'bg-light'} text-center fs-5 fw-bold p-1`} value={task} readOnly={!isEditable}/>
         
        {isEditable ? <Save2 onClick={handleSave} color='yellow' className='edit'/> : <PencilFill onClick={editBtnHandler} color='yellow' className='edit'/>}
        <Trash onClick={deleteHandler} color="yellow" className='trash'/>  
    </div>
  )
}

export default Todo