import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)  
  
  const handleIncrement = () => {
    setCount(count+1)
  }

  const handleDecrement = () => {
    setCount(count-1)
  }

  const handleReset = () => {
    setCount(0)
  }
  return (
    <div>
      <p>{`${count <= 1 ? 'Contador ':'Contadores '}${count}`}</p>
      <button onClick={handleIncrement}>Incrementar</button>
      <button className='btn' onClick={handleDecrement} disabled={count === 0}>Decrementar</button>
      <button onClick={handleReset}>Reiniciar</button>

      
    </div>
  );
}

export default App;
