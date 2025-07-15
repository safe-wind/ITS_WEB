import {useState } from "react"

const CambioNome = () => {

    const [nome,setNome] = useState("Roberto");

    const toggleName = () => {
        if (nome==="Mario"){
            setNome("Roberto")
        }else{
            setNome("Mario")
        };
    }

    return (
        <>
        <div> 
            <h2>{ nome }</h2>
            <button onClick={toggleName} className="btn btn-dark">Cambia nome</button>
        </div>
        </>
    );
}

export default CambioNome