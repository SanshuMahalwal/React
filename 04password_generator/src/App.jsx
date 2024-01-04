import { useState, useRef, useEffect, useCallback } from 'react'
import './App.css'

function App() {
  const arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z', 'a', "b", 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', "q", 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const chars = ['!', '@', '#', '$', '%', '^', '&', '*', '_'];
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(true);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);
  const passRef = useRef();


  const genPass = useCallback(()=>{
    let myArr = arr;
    let newPass = "";
    if(number) {
      myArr = arr.concat(nums);
    }
    if(char) {
      myArr = arr.concat(chars);
    }

    let factor = myArr.length - 1;
    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random()*factor + 1);
      console.log(index);
      newPass += myArr[index];
    }
    setPassword(newPass);
  }, [length, number, char, setPassword])

  useEffect(()=>{
    genPass();
  }, [length, number, char])

  const clickHandler = () => {
    setCopied(true);
    passRef.current?.select();
    window.navigator.clipboard.writeText(passRef.current?.value);
  }

  return (
    <div className='contain w-50 bg-dark mx-auto my-5 p-3 border-1 rounded-4'>

      <h1 className='text-center text-warning'>Generate your Password</h1>
      <div className='w-80 d-flex justify-content-center mb-3 p-2'>
        <input ref={passRef} className='w-75 rounded-3 shadow-none outline-none fs-4 py-1 px-2' type="text" value={password} readOnly/>
        {!copied ? <button onClick={clickHandler} className='btn btn-lg btn-primary'>Copy</button> : <button className='btn btn-lg btn-success'>Copied!</button>}
      </div>
      
      <div className='d-flex align-items-center justify-content-evenly'>
        <span className='d-flex align-items-center mx-3'>
          <input onChange={(e) => {setLength(e.target.value) ; setCopied(false)}} type="range" id="length" className='me-2' min={6} max={20} defaultValue={8}></input>
          <label htmlFor="length" className='text-warning fs-5'>Length ({length})</label>
        </span>
        
        <span>
          <input onChange={()=>{setNumber(!number) ; setCopied(false)}} type="checkbox" id='number' className='me-1' defaultChecked={true}/>
          <label htmlFor="number" className='text-warning fs-5'>Number</label>
        </span>

        <span>
          <input onChange={()=>{setChar(!char) ; setCopied(false)}} type="checkbox" id='character' className='me-1'/>
          <label htmlFor="character" className='text-warning fs-5'>Character</label>
        </span>
        
      </div>

    </div>
  )
}

export default App
