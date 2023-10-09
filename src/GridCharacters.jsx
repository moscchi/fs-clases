import React from "react";

const GridCharacters = (props) => {
  return (
    <div className="container__grid-character__card">
      {props.characters.map((character) => {
        return (
          <div key={character.id} className="grid-character__card" onClick={() => props.setLabelFavoriteCharacter(character.name)}>
            <img
              src={character.image}
              className="grid-character__card-content-image"
              alt="foto personaje"
            />
            <div>
              <h3>{character.name}</h3>
              <div className={"grid-character__card-content"}>
                <p>Status: {character.status}</p>
                <p>Species: {character.species}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GridCharacters;
