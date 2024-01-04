import React from 'react'
import './Card.css'
 
const Card = ({role, company}) => {
  return (
    <>
        <div className="card text-bg-primary m-2" >
            <div className="card-header">{company}</div>
            <div className="card-body">
                <h5 className="card-title">{role}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
        
    </>
  )
}

export default Card