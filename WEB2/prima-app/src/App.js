
import './App.css';
import Componente1 from './Componente1';
import Clock from './Clock';
import Messaggio from "./Componente1";
import Anagrafica from "./Componente1";
import Contatore from './Contatore';
import React, { useState } from 'react';


function App() {

  //contatore
  

  //const [persone,setpersone] = useState(Anagrafica)
  let nome="Mario";

  const persona1 = {
    nome:"Mario",
    cognome:"Bros",
    eta:"50",
  };

  const persona2 = {
  nome:"Browser",
  cognome:"Bros",
  eta:"70",
  };

  
  





  return (
  
    <div className="App">
      <Contatore></Contatore>
      <h1>Prima App React {nome}</h1>
      
      <Componente1 {...persona1}></Componente1>
      <Componente1 {...persona2}></Componente1>
      <Componente1 nome="Luigi" cognome="Bros" eta="50"></Componente1>
      
      <Clock timezone="-6" country="USA"></Clock>
      <Clock timezone="0" country="Italy"></Clock>
      <Clock timezone="+7" country="Japan"></Clock>

    </div>
  );
}

export default App;
