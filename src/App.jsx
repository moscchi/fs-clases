import { useState } from "react";
import ButtonIncrement from "./ButtonIncrement";
import ButtonDecrement from "./ButtonDecrement";
import ButtonUpdateNumberState from "./ButtonUpdateNumberState";

function App() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <ButtonIncrement number={number} setNumber={setNumber} />
      <ButtonDecrement number={number} setNumber={setNumber} />
      <br />
      <ButtonUpdateNumberState
        number={number}
        setNumber={setNumber}
        typeButton={"increment"}
      />
      <ButtonUpdateNumberState
        number={number}
        setNumber={setNumber}
        typeButton={"decrement"}
      />
    </>
  );
}

export default App;
