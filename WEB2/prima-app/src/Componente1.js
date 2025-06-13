import React from "react";

const Componente1 = ({nome, cognome, eta}) => {
  let anni = 23;
  return (
    <>
      <div style={{ color: "green", fontWeight: "800" }}>
        <div>
          Componente1 {nome} {cognome} di anni {eta}
        </div>
        <footer></footer>
      </div>
    </>
  );
};

const Anagrafica = () => {
  return <div>Anagrafica</div>;
};

const Messaggio = () => {
  return <div>Messaggio</div>;
};
export default Componente1;
