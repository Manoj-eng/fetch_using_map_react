import React from 'react'

const Input = ({type,name,id,value,onClick,onChange}) => {
    return (
        <input type={type} name={name} id={id} value={value} onClick={onClick} onChange={onChange} />
    )
}

export default Input