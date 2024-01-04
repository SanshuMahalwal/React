import { useState } from "react";
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [atMaxCount, setAtMaxCount] = useState(false);
  const [atMinCount, setAtMinCount] = useState(false);

  const addClickHandler = () => {
    setAtMinCount(false);
    setCount(prevState => prevState < 10 ? prevState + 1 : prevState);
    if(count === 10) {
      setAtMaxCount(true);
    }
  }

  const subClickHandler = () => {
    setAtMaxCount(false);
    if (count == 0) {
      setAtMinCount(true);
    }
    setCount(prevState => prevState > 0 ? prevState - 1 : prevState);

  }

  return(
    <div className="container">
      <h2>Counter : {count}</h2>
      <button onClick={addClickHandler}>Add count</button>
      <br />
      <br />
      <button onClick={subClickHandler}>Subtract count</button>
      {atMinCount && <p>Oops! Count cannot be less than 0</p>}
      {atMaxCount && <p>Oops! Count cannot be more than 10</p>}
    </div>
  )
} 
  
export default App;
