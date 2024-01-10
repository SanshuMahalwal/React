import './App.css'
import { Todo, TodoForm } from './components'
import { useSelector, useDispatch } from 'react-redux'
import { resetAll } from './features/todos/todosSlice'

function App() {

  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetAll());
  }

  return (
      <div className="d-flex flex-column align-items-center w-50 mx-auto my-5 bg-dark rounded-4 p-3">
        <h1 className="text-warning text-center">Todo App</h1>
        
        <TodoForm />

        <div className="d-flex flex-column p-2 my-2 w-100 rounded-4">
          {
            todos.map((todo) => (
              <Todo key={todo.id} todo={todo}/>
            ))          
          }  
        </div>

        {todos.length !== 0 && <button onClick={handleReset} className="btn btn-primary btn-sm rounded-pill shadow-sm">Reset list</button>}

      </div>
    
  )
}

export default App
