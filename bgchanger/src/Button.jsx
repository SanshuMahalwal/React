import React from 'react'


const Button = ({bscolor, name, setColor}) => {
    const clickHandler = (e) => {
        setColor(e.target.classList[1].slice(4));
    }

    return (
        <button onClick={clickHandler} className={`btn btn-${bscolor} rounded-pill`}>{name}</button>
    )
}

export default Button;