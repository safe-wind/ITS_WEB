
import './App.css';
import Componente1 from './Componente1';
import Clock from './Clock';
import Messaggio from "./Componente1";
import Anagrafica from "./Componente1";
import Contatore from './Contatore';
import React, { useState } from 'react';
import CambioNome from './CambioNome';
import LoginForm from './LoginForm';
import EsercizioSlide5 from './EsercizioSlide5';
import Saluto from './Saluto';
import CardUtente from './CardUtente';
import MenuRistorante from './3/MenuRistorante';
function App() {



  //contatore
  

  //const [persone,setpersone] = useState(Anagrafica)
  // let nome="Mario";

  // const persona1 = {
  //   nome:"Mario",
  //   cognome:"Bros",
  //   eta:"50",
  // };

  // const persona2 = {
  // nome:"Browser",
  // cognome:"Bros",
  // eta:"70",
  // };
  return (
  // 
    // <div className="App">
    //   <Contatore></Contatore>
    //   <h1>Prima App React {nome}</h1>
      
    //   <CambioNome></CambioNome>
    //   <LoginForm></LoginForm>
    //   <Componente1 {...persona1}></Componente1>
    //   <Componente1 {...persona2}></Componente1>
    //   <Componente1 nome="Luigi" cognome="Bros" eta="50"></Componente1>
      
    //   <Clock timezone="-6" country="USA"></Clock>
    //   <Clock timezone="0" country="Italy"></Clock>
    //   <Clock timezone="+7" country="Japan"></Clock>
    // </div>

//

    <div className='App'>
      <EsercizioSlide5></EsercizioSlide5>
      <Saluto></Saluto>
      <CardUtente nome="Mario" email="mar@io.com" imgUrl="https://placehold.co/600x+400"></CardUtente>
      <MenuRistorante></MenuRistorante>
    </div>
  );
}

export default App;
