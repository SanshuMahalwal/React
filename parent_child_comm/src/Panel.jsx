import React from 'react'
import './Panel.css'

const Panel = ({title, isActive, onShow, children}) => {

  const handleClick = (e) => {
    onShow();
  }

  return (
    <section>
        <h3 style={{textAlign:'center'}}>{title}</h3>
        <hr/>
        {isActive ? <p>{children}</p> : <button onClick={handleClick}>Show</button>}   
    </section>
  )
}

export default Panel;
