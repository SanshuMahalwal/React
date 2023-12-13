import { useState } from 'react';
import './App.css'
import Button from './Button'

function App() {
  const [color, setColor] = useState("black");

  return (
    <div className={`vh-100 vw-100 bg-${color}`}>
      <div className='container bg-black border border-1 rounded-pill p-2 d-flex justify-content-evenly'>
        <Button bscolor="primary" name="Light Blue" setColor={setColor}/>
        <Button bscolor="secondary" name="Grey" setColor={setColor}/>
        <Button bscolor="success" name="Light Green" setColor={setColor}/>
        <Button bscolor="warning" name="Yellow" setColor={setColor}/>
        <Button bscolor="info" name="Blue" setColor={setColor}/>
        <Button bscolor="danger" name="Red" setColor={setColor}/>
        <Button bscolor="dark" name="Dark Grey" setColor={setColor}/>
      </div>
    </div>
      
  )
}

export default App
