import React, { useState } from 'react'

const Contatore = () => {

    const [count,setCount] = useState(0);


    const aumenta = () => {
        setCount(valoreAttuale => valoreAttuale+1);

    };


    const diminuisce = () => {
        setCount(valoreAttuale => valoreAttuale-1);
    };


  return (
    <div>{count}
    <button onClick={aumenta} className='btn btn-success'>aumenta</button> 
    <span></span> 
    <button onClick={diminuisce} className="btn btn-danger">diminuisce</button>
    </div>

  )
}

export default Contatore