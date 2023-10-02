import { useEffect, useState } from "react";
import CardCharacter from "./CardCharacter";

function Character(props) {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(
      `https://rickandmortyapi.com/api/character/${Math.floor(
        Math.random() * 100
      )}`
    )
      .then((response) => response.json())
      .then((response) =>
        setCharacter({
          id: response.id,
          name: response.name,
          image: response.image,
        })
      );
  }, []);
  
  useEffect(() => {
    setCharacter({id: 1, name: `Personaje Inventado ${props.number}`, image: ""})
  }, [props.number]);
  return (
    <>
      {character ? (
        <CardCharacter character={character} setCharacter={setCharacter} />
      ) : (
        <p>No hay personaje para mostrar.</p>
      )}
    </>
  );
}

export default Character;
