import React from "react";

const ListCharacters = (props) => {
  return (
    <div>
      {props.characters.map((character) => {
        return (
          <div key={character.id} className="list-character__card" onClick={() => props.setLabelFavoriteCharacter(character.name)}>
            <div>
              <h3>{character.name}</h3>
              <div className={"list-character__card-content"}>
                <p>Status: {character.status}</p>
                <p>Species: {character.species}</p>
              </div>
            </div>
            <img src={character.image} className="list-character__card-content-image" alt="foto personaje" />
          </div>
        );
      })}
    </div>
  );
};

export default ListCharacters;
