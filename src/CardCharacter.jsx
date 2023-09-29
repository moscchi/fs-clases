const CardCharacter = (props) => {

    const handleCapitalLetters = () => {
        props.setCharacter({
            ...props.character,
            name: props.character.name.toUpperCase()
        })
    }

  return (
      <div>
        <h1>{props.character.name}</h1>
        <img src={props.character.image} />
        <button onClick={handleCapitalLetters}>Pasar name a mayusculas</button>
      </div>
  );
};

export default CardCharacter;
