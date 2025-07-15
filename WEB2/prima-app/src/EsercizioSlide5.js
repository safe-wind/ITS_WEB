
import React from 'react'
import { posts } from './data'


const Esercizio5 = () => {
  return (

    <div className='container'>
      <div className='row'>
      {
        posts.map((p)=>{
          return(
            <div className='col'>
              

              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{p.titolo}</h5>
                  <p className="card-text">{p.descrizione}</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>

            </div>
          )
        })
      }

        
      </div>


    </div>
 
  )
}

export default Esercizio5