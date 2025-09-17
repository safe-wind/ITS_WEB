import React from 'react'
import piatti from './piatti'

const MenuRistorante = () => {
  return (
    <ul>
        {
            piatti.map((p)=>{
                return (
                    <li key={p.id} className='list-group-item'>
                        <span>{p.nome} </span> 
                        <span> {p.prezzo}</span></li> )
            }
        )
        }
    </ul>
    
  )
}

export default MenuRistorante