import { useState } from "react";
import "./App.css";
import CardCharacter from "./CardCharacter";

function App() {
  const [character, setCharacter] = useState(null);
  console.log(character);
  const handleGetCharacter = () => {
  
    fetch(`https://rickandmortyapi.com/api/character/${Math.floor((Math.random() * 100))}`)
      .then((response) => response.json())
      .then((response) =>
        setCharacter({
          id: response.id,
          name: response.name,
          image: response.image,
        })
      );
  };
  return (
    <>
      {character ? (
        <CardCharacter character={character} setCharacter={setCharacter}/>
      ) : (
        <p>No hay personaje para mostrar.</p>
      )}
      <button onClick={handleGetCharacter}>Get Character</button>
    </>
  );
}

export default App;
