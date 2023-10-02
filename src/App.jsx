import { useEffect, useState } from "react";
import ButtonUpdateNumberState from "./ButtonUpdateNumberState";
import Character from "./Character";

function App() {
  const [number, setNumber] = useState(0);
  const [otherNumber, setOtherNumber] = useState(0);
  const [isHidden, setIsHidden] = useState(false);
  useEffect(() => {
    console.log('Cambiando estado que muestra botones')
  }, [isHidden])

  const handleHiddenButton = () => setIsHidden(!isHidden);

  return (
    <>
      <button onClick={handleHiddenButton}>{isHidden ? 'Ocultar Botones': 'Mostrar Botones'}</button>
      {isHidden && (
        <>
          <ButtonUpdateNumberState
            number={otherNumber}
            setNumber={setOtherNumber}
            typeButton={"increment"}
          />
          <ButtonUpdateNumberState
            number={number}
            setNumber={setNumber}
            typeButton={"decrement"}
          />
          <Character number={number}/>
        </>
      )}
    </>
  );
}

export default App;
