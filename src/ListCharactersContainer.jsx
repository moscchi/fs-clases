import React, { useEffect, useState } from "react";
import ListCharacters from "./ListCharacters";
import GridCharacters from "./GridCharacters";

const ListCharactersContainer = (props) => {
  const [characters, setCharacters] = useState([]);
  const [listType, setListType] = useState("list");
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/[1,2,3,4,5,6,7,8,9]`)
      .then((response) => response.json())
      .then((response) => setCharacters(response));
  }, []);

  useEffect(() => {
    alert('Cambiaste el tipo de la lista')
  }, [listType]);

  const handleListType = (type) => setListType(type);

  return (
    <>
      <div className="container__list-characters">
        <div className="list-characters__header">
          <h1>Lista de Personajes</h1>
          <div className="list-characters__headers__buttons">
            <button onClick={() => handleListType("list")}>Lista</button>
            <button onClick={() => handleListType("grid")}>Grid</button>
          </div>
        </div>
        {listType === "list" ? (
          <ListCharacters
            setLabelFavoriteCharacter={props.setLabelFavoriteCharacter}
            characters={characters}
          />
        ) : (
          <GridCharacters
            setLabelFavoriteCharacter={props.setLabelFavoriteCharacter}
            characters={characters}
          />
        )}
      </div>
    </>
  );
};

export default ListCharactersContainer;
