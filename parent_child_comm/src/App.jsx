import { useState } from 'react';
import './App.css'
import Panel  from './Panel'


function App() {
  const [isActive, setIsActive] = useState(null);

  return (
    <>
      <h1 style={{textAlign:'center'}}>Delhi</h1>
      <Panel title="About" isActive={isActive === 0} onShow={()=>setIsActive(0)}>Delhi, officially the National Capital Territory (NCT) of Delhi, is a city and a union territory of India containing New Delhi, the capital of India. </Panel>
      <Panel title="Geography" isActive={isActive === 1} onShow={()=>setIsActive(1)}>Delhi is located in Northern India, at 28.61°N 77.23°E. The city is bordered on its northern, western, and southern sides by the state of Haryana and to the east by that of Uttar Pradesh (UP). </Panel>
    </>
    
  )
}

export default App;
