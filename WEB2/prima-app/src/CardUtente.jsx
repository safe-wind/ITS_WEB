import React from 'react'

const CardUtente = (props) => {
  return (
    <>
    <div className="card" style={{ width: "18rem" }}>
    <img src={props.imgUrl} className="card-img-top" alt="..." />
    <div className="card-body">
    <h5 className="card-title">{props.nome}</h5>
    <p className="card-text">{props.email}
    </p>
    <a href="#" className="btn btn-primary">
      Go somewhere
    </a>
    </div>
    </div>
    </>
    
  )
}

export default CardUtente;