const ButtonDecrement = (props) => {
  const decrementNumber = (numberParam) => {
    props.setNumber(numberParam - 1);
  };

  return (
    <button onClick={() => decrementNumber(props.number)}>
      Boton estatico  Decrementar el numero: {props.number}
    </button>
  );
};

export default ButtonDecrement;
