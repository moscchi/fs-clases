import { useEffect, useState } from "react";
import './styles.css'
import ListCharactersContainer from "./ListCharactersContainer";

function App() {
  
  const [labelFavoriteCharacter, setLabelFavoriteCharacter] = useState('')

  return (
    <>
      {labelFavoriteCharacter ? `Mi personaje favorito es ${labelFavoriteCharacter}`:''}
      <ListCharactersContainer setLabelFavoriteCharacter={setLabelFavoriteCharacter}/>
    </>
  );
}

export default App;
